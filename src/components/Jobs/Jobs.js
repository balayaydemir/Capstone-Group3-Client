import React, { Component } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import FirebaseContext from "../../services/context.js";
import "./Jobs.css";
import WorkerEditForm from "../WorkerEditForm/WorkerEditForm";

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandJob: false,
      showEditForm: false
    };
  }

  static contextType = FirebaseContext;

  //change function name to be clearer handleStatusChange
  handleApprovalSubmit = async (id, status, approval = false) => {
    let jobs = [];
    console.log(id);
    await this.context.updateJobStatus(
      id,
      status,
      this.props.job.project_id,
      approval
    );
    await this.context.updateAndSetJobs(id, status);
    console.log(jobs);
  };

  // handleJobApproval = async id => {
  //   await this.context.updateJobApproval(id, this.props.job.project_id);
  //   await this.context.updateAndSetJobs(id, "Complete");
  // };

  renderEmployeeList = jobWorkers => {
    if (!jobWorkers || jobWorkers.length === 0)
      return <h5>No Workers Assigned</h5>;
    return jobWorkers.map((employee, index) => {
      let itemKey = index + employee;
      return <li key={itemKey}>{employee}</li>;
    });
  };

  renderEditForm = async id => {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  };

  //Maybe make a form for request edit so the worker can submit a reason for the request
  //Update revision field in db to store request details
  renderProjectButtons(approval, progress, id, status) {
    if (this.context.user.role === "project worker") {
      if (status === "completed") return <span>Project Completed</span>;
      if (status === "submitted" || status === "completed") return <></>;
      if (approval || progress !== 100) {
        return (
          <>
            <button disabled>Submit for Approval</button>
            {(status !== "completed" || status !== "submitted") &&
            status !== "edit request" ? (
              <button onClick={e => this.renderEditForm(id)}>
                Request Edit
              </button>
            ) : (
              <></>
            )}
            {this.state.showEditForm ? (
              <WorkerEditForm
                job={this.props.job}
                renderEditForm={this.renderEditForm}
                handleStatus={this.handleApprovalSubmit}
              />
            ) : (
              <></>
            )}
          </>
        );
      } else {
        return (
          <>
            {status === "revisions" ? <span>Revision Requested</span> : <></>}
            <button
              onClick={e => this.handleApprovalSubmit(id, "submitted", false)}
            >
              Submit for Approval
            </button>
          </>
        );
      }
    }

    //Employee has Submit for Revision: edit request -> alert PM attached to project

    if (
      this.context.user.role === "project manager" ||
      this.context.user.role === "admin"
    ) {
      if (status === "completed") return <span>Job Completed</span>;
      return (
        <>
          {!approval && progress === 100 && status !== "revisions" ? (
            <span>AWAITING APPROVAL</span>
          ) : (
            <></>
          )}
          {!approval && progress === 100 && status === "revisions" ? (
            <span>Revision Requested</span>
          ) : (
            <></>
          )}
          {/* <button>Assign</button> //assign employees PM/admin
          <button>Edit</button> //edit for PM (change name, description, timeline)}*/}
          {status === "submitted" ? (
            <div>
              <button
                onClick={e => this.handleApprovalSubmit(id, "completed", true)}
              >
                Approve
              </button>{" "}
              <button onClick={e => this.handleApprovalSubmit(id, "revisions")}>
                Request Revision
              </button>
            </div>
          ) : (
            <></>
          )}
        </>
      );
    }
  }

  toggleExpand = () => {
    this.setState({
      expandJob: !this.state.expandJob
    });
  };

  componentDidMount() {
    this.setState({
      userRole: this.context.user.role
    });
  }

  render() {
    let job = this.props.job;
    const progress = Math.floor((job.hours_completed / job.total_hours) * 100);
    return (
      <>
        <li key={job.id} id={job.id}>
          <div className="job_details">
            <button onClick={this.toggleExpand}>
              {this.state.expandJob ? "-" : "+"}
            </button>
            <h4>{job.name}</h4>
            <span>{job.description}</span>
            <ProgressBar percentage={progress} />
          </div>
          {this.renderProjectButtons(
            job.approval,
            job.progress,
            job.id,
            job.status
          )}
          {this.state.expandJob ? (
            <ul>{this.renderEmployeeList(job.project_workers)}</ul>
          ) : (
            ""
          )}
        </li>
      </>
    );
  }
}
