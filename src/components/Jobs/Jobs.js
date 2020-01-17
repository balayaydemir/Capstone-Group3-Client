import React, { Component } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import FirebaseContext from '../../services/context.js';
import JobForm from '../JobForm/JobForm';

import './Jobs.css';
import WorkerEditForm from '../WorkerEditForm/WorkerEditForm';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandJob: false,
      showEditForm: false,
      showWorkerEditForm: false
    };
  }

  static contextType = FirebaseContext;

  //change function name to be clearer handleStatusChange
  handleApprovalSubmit = async (id, status, approval = false) => {
    let jobs = [];
    // let alert;
    let newJobObj = this.props.job;
    console.log(id);
    if (
      status === 'submitted' ||
      status === 'complete' ||
      status === 'revisions'
    ) {
      newJobObj.status = status;
      newJobObj.alert = newJobObj.project_workers;
      newJobObj.approval = approval;
    } else {
      newJobObj.status = status;
      newJobObj.approval = approval;
    }
    console.log(newJobObj);
    // alert = this.props.job.project_workers;

    await this.context
      .editJob(id, newJobObj)
      .then(this.context.editAndSetJobs(id, newJobObj));
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

  renderProjectButtons(approval, total_hours, hours_completed, id, status) {
    const progress = Math.floor((hours_completed / total_hours) * 100);
    if (this.context.user.role === 'project worker') {
      if (status === 'completed') return <span>Project Completed</span>;
      if (status === 'submitted' || status === 'completed') return <></>;
      if (approval || progress !== 100) {
        return (
          <>
            <button disabled>Submit for Approval</button>
            {(status !== 'completed' || status !== 'submitted') &&
            status !== 'edit request' ? (
              <button onClick={e => this.showWorkerEditForm()}>
                Request Edit
              </button>
            ) : (
              <></>
            )}
          </>
        );
      } else {
        return (
          <>
            {status === 'revisions' ? <span>Revision Requested</span> : <></>}
            <button
              onClick={e => this.handleApprovalSubmit(id, 'submitted', false)}
            >
              Submit for Approval
            </button>
          </>
        );
      }
    }

    //Employee has Submit for Revision: edit request -> alert PM attached to project

    if (
      this.context.user.role === 'project manager' ||
      this.context.user.role === 'owner'
    ) {
      if (status === 'completed') return <span>Job Completed</span>;
      return (
        <>
          {!approval && progress === 100 && status !== 'revisions' ? (
            <span>AWAITING APPROVAL</span>
          ) : (
            <></>
          )}
          {!approval && progress === 100 && status === 'revisions' ? (
            <span>Revision Requested</span>
          ) : (
            <></>
          )}
          <button onClick={this.showEditForm}>Edit</button>
          {status === 'submitted' ? (
            <div>
              <button
                onClick={e => this.handleApprovalSubmit(id, 'completed', true)}
              >
                Approve
              </button>{' '}
              <button onClick={e => this.handleApprovalSubmit(id, 'revisions')}>
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

  showEditForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  };

  showWorkerEditForm = () => {
    this.setState({
      showWorkerEditForm: !this.state.showWorkerEditForm
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
          <div className='job_details'>
            <button onClick={this.toggleExpand}>
              {this.state.expandJob ? '-' : '+'}
            </button>
            <h4>{job.name}</h4>
            <span>{job.description}</span>
            <ProgressBar percentage={progress} />
            {this.renderProjectButtons(
              job.approval,
              job.total_hours,
              job.hours_completed,
              job.id,
              job.status
            )}
          </div>
          {this.state.showEditForm ? (
            <JobForm showJobForm={this.showEditForm} job={job} />
          ) : (
            ''
          )}
          {this.state.showWorkerEditForm &&
          this.context.user.role === 'project worker' ? (
            <WorkerEditForm
              job={this.props.job}
              renderEditForm={this.showWorkerEditForm}
              handleStatus={this.handleApprovalSubmit}
            />
          ) : (
            <></>
          )}
          {this.state.expandJob ? (
            <ul>{this.renderEmployeeList(job.project_workers)}</ul>
          ) : (
            ''
          )}
        </li>
      </>
    );
  }
}
