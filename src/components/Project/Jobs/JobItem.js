import React, { Component } from 'react';
import { ProgressBar } from '../../ProgressBar/ProgressBar';
import JobForm from '../JobForm/JobForm';
import dbServices from '../../../services/dbServices';
import WorkerEditForm from '../WorkerEditForm/WorkerEditForm';
import { AuthContext } from '../../../services/Auth';
import StyleIcon from '../../StyleIcon/StyleIcon';
import dateConversions from '../../../services/dateConversions';
import LogHours from '../../LogHours/LogHours';
import { Pie } from 'react-chartjs-2';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';

class JobItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandJob: false,
      showEditForm: false,
      showLogHours: false,
      showWorkerEditForm: false,
    };
  }

  static contextType = AuthContext;

  handleApprovalSubmit = async (
    id,
    status,
    approval = false,
    date_completed = null
  ) => {
    if (!approval) {
      try {
        await dbServices.updateJobStatus(
          id,
          status,
          this.props.job.project_id,
          approval,
          this.props.job.organization,
          date_completed
        );
      } catch (error) {
        console.warn(error);
        Swal.fire({
          title: 'Error!',
          text:
            'There was an issue approving this task - please refresh the page and try again.',
          icon: 'error',
          confirmButtonText: 'Close',
        });
      }
    } else {
      date_completed = dateConversions.dateToTimestamp(new Date());
      try {
        await dbServices.updateJobStatus(
          id,
          status,
          this.props.job.project_id,
          approval,
          this.props.job.organization,
          date_completed
        );
      } catch (error) {
        console.warn(error);
        Swal.fire({
          title: 'Error!',
          text:
            'There was an issue approving this task - please refresh the page and try again.',
          icon: 'error',
          confirmButtonText: 'Close',
        });
      }
    }
  };

  deleteTask = e => {
    e.stopPropagation();
    Swal.fire({
      title: 'Are you sure?',
      text: 'By clicking the button below, you will be deleting this task.',
      icon: 'question',
      confirmButtonText: "I'm sure!",
      showCancelButton: true,
    }).then(value => {
      if (value.dismiss === 'cancel') return null;
      else {
        let id = this.props.job.id;
        let projectId = this.props.job.project_id;
        let org = this.props.job.organization;

        dbServices.deleteJobById(id, projectId, org);
      }
    });
  };

  renderEmployeeList = jobWorkers => {
    if (!jobWorkers || jobWorkers.length === 0)
      return <h5>No Workers Assigned</h5>;
    return jobWorkers.map((employee, index) => {
      let itemKey = index + employee;
      return <li key={itemKey}>{employee}</li>;
    });
  };

  renderProjectButtons(approval, total_hours, hours_completed, id, status) {
    const progress = Math.floor((hours_completed / total_hours) * 100);
    if (this.context.currentUser.role === 'project worker') {
      if (status === 'submitted' || status === 'completed') return <></>;
      if (approval || progress !== 100) {
        return (
          <>
            <div
              className="JobItem__fa"
              onClick={this.renderLogHoursForm}
              data-tip="Log Hours"
            >
              {StyleIcon({ style: 'clock' })}
            </div>
            {(status !== 'completed' || status !== 'submitted') &&
            status !== 'edit request' ? (
              <div
                className="JobItem__fa"
                onClick={e => this.showWorkerEditForm(e)}
                data-tip="Request Edit"
              >
                {StyleIcon({ style: 'requestEdit' })}
              </div>
            ) : (
              <></>
            )}
          </>
        );
      } else {
        return (
          <>
            <div
              className="JobItem__fa_bigger"
              onClick={e => this.handleApprovalSubmit(id, 'submitted', false)}
              data-tip="Submit Approval"
            >
              {StyleIcon({ style: 'submit' })}
            </div>
          </>
        );
      }
    }

    if (
      this.context.currentUser.role === 'project manager' ||
      this.context.currentUser.role === 'owner'
    ) {
      return (
        <>
          {this.context.currentUser.role === 'project manager' &&
          progress !== 100 ? (
            <div
              className="JobItem__fa"
              onClick={this.renderLogHoursForm}
              data-tip="Log Hours"
            >
              {StyleIcon({ style: 'clock' })}
            </div>
          ) : (
            ''
          )}
          <div
            className="JobItem__fa"
            onClick={this.showEditForm}
            data-tip="Edit Task"
          >
            {StyleIcon({ style: 'edit' })}
          </div>
          <div
            className="JobItem__fa"
            data-tip="delete"
            onClick={this.deleteTask}
          >
            {StyleIcon({ style: 'delete' })}
          </div>
          {status === 'submitted' ? (
            <div>
              <div
                className="JobItem__fa_bigger"
                onClick={e => this.handleApprovalSubmit(id, 'completed', true)}
                data-tip="Approve"
              >
                {StyleIcon({ style: 'approve' })}
              </div>
              <div
                className="JobItem__fa_bigger"
                onClick={e => this.handleApprovalSubmit(id, 'revisions')}
                data-tip="Make Revisions"
              >
                {StyleIcon({ style: 'revise' })}
              </div>
            </div>
          ) : (
            <>
              {hours_completed / total_hours === 1 ? (
                <div
                  className="JobItem__fa_bigger"
                  onClick={e =>
                    this.handleApprovalSubmit(id, 'submitted', false)
                  }
                  data-tip="Submit Approval"
                >
                  {StyleIcon({ style: 'submit' })}
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      );
    }
  }

  renderChart(job) {
    let employeeHoursArr = [];
    let labels = [];

    job.employee_hours &&
      job.employee_hours.forEach(emp => {
        labels.push(emp.name);
        employeeHoursArr.push(emp.hours);
      });

    if (employeeHoursArr.every(item => item === 0)) {
      employeeHoursArr = [];
    }

    let employeeHours = {
      labels: labels,
      datasets: [
        {
          label: `Logged Hours by Employee`,
          data: employeeHoursArr,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
        },
      ],
    };

    if (employeeHoursArr.length !== 0) {
      return (
        <Pie
          data={employeeHours}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: { display: true, text: 'Hours Logged', fontSize: 20 },
            legend: { labels: { fontSize: 16 } },
          }}
        />
      );
    } else {
      return <></>;
    }
  }

  toggleExpand = () => {
    this.setState({
      expandJob: !this.state.expandJob,
    });
  };

  showEditForm = e => {
    e.stopPropagation();
    this.setState({
      showEditForm: !this.state.showEditForm,
      expandJob: false,
    });
  };

  submitEditForm = () => {
    this.setState({
      showEditForm: false,
    });
  };

  submitLogHours = () => {
    this.setState({
      showLogHours: !this.state.showLogHours,
    });
  };

  renderLogHoursForm = e => {
    e.stopPropagation();
    this.setState({
      showLogHours: !this.state.showLogHours,
      expandJob: false,
    });
  };

  showWorkerEditForm = e => {
    e.stopPropagation();
    this.setState({
      showWorkerEditForm: !this.state.showWorkerEditForm,
      expandJob: false,
    });
  };

  submitWorkerEdit = () => {
    this.setState({
      showWorkerEditForm: false,
    });
  };

  render() {
    const job = this.props.job;
    const progress = Math.floor((job.hours_completed / job.total_hours) * 100);
    return (
      <>
        <li className="JobItem" key={job.id} id={job.id}>
          <div className="JobItem__container" onClick={this.toggleExpand}>
            <div className="JobItem__icon">
              {StyleIcon({
                style: `${this.state.expandJob ? 'expand' : 'collapse'}`,
              })}
            </div>
            <span className="JobItem__name">{job.name}</span>
            <div className="JobItem__details">
              <span>Details:</span>
              <div className="JobItem__details_text">{job.description}</div>
            </div>
            <div className="JobItem__progress">
              <div className="JobItem__meter_container">
                <span>Est. Progress</span>
                <ProgressBar percentage={progress} />
              </div>
              <div className="JobItem__date_etc">
                <span className="JobItem__date">
                  Due: {dateConversions.TStoDisplayDate(job.deadline)}
                </span>
                {job.status === 'completed' && <span>Task Completed</span>}
                {!job.approval &&
                progress === 100 &&
                job.status !== 'revisions' &&
                this.context.currentUser.role !== 'project manager' ? (
                  <span>Awaiting Approval</span>
                ) : (
                  <></>
                )}
                {!job.approval &&
                progress === 100 &&
                job.status === 'revisions' ? (
                  <span className="JobItem__revisions_requested">
                    Revision Requested
                  </span>
                ) : (
                  <></>
                )}
                {job.status !== 'completed'
                  ? dateConversions.dateDiff(job.deadline) &&
                    dateConversions.dateDiff(job.deadline)
                  : ''}
              </div>
            </div>
            <div className="JobItem__buttons">
              {this.renderProjectButtons(
                job.approval,
                job.total_hours,
                job.hours_completed,
                job.id,
                job.status
              )}
            </div>
          </div>
          {this.state.expandJob && (
            <div className="JobItem__expand_container">
              <div className="JobItem__assigned_employees">
                <span>Assigned Employees: </span>
                <ul>{this.renderEmployeeList(job.project_workers)}</ul>
              </div>
              {this.renderChart(job)}
            </div>
          )}
          <div className="JobItem__form_container">
            {this.state.showLogHours && (
              <LogHours job={job} renderLogHoursForm={this.submitLogHours} />
            )}
            {this.state.showEditForm && (
              <div className="JobItem__form">
                <JobForm showJobForm={this.submitEditForm} job={job} />
              </div>
            )}
            {this.state.showWorkerEditForm &&
              this.context.currentUser.role === 'project worker' && (
                <WorkerEditForm
                  job={job}
                  renderEditForm={this.submitWorkerEdit}
                  handleStatus={this.handleApprovalSubmit}
                  className={'Form'}
                />
              )}
          </div>
          <ReactTooltip place="bottom" type="dark" effect="float" />
        </li>
      </>
    );
  }
}

export default JobItem;
