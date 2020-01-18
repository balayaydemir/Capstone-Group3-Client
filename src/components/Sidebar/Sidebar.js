import React, { useContext, useState } from 'react';
//import FirebaseContext from "../../services/context";
import { ProjectManagers } from './ProjectManagers';
import { ProjectWorkers } from './ProjectWorkers';
import './Sidebar.css';

const Sidebar = props => {
  //const context = useContext(FirebaseContext);

  let [expanded, setExpanded] = useState([]);
  let [clicked, setClick] = useState(false);
  let [location, setLocation] = useState('');
  let [locationUpdated, setUpdate] = useState(false);

  //console.log(window.location.href.includes("project"));

  const toggleExpand = e => {
    setClick(true);
    let newExpanded = [];
    if (!expanded.includes(e.target.id)) {
      newExpanded = expanded;
      newExpanded.push(e.target.id);
      setExpanded(newExpanded);
    } else {
      newExpanded = expanded.filter(id => id !== e.target.id);
      setExpanded(newExpanded);
    }
    return expanded;
  };

  if (clicked === true) setClick(false);

  if (!window.location.href.includes('project') && locationUpdated === true) {
    setUpdate(false);
  }

  if (window.location.href.includes('project') && locationUpdated === false) {
    setLocation('project');
    setUpdate(true);
  }

  /*
  if (context.user.role === 'project worker' && location !== 'project') {
    return <></>;
  } else if (context.user.role === 'project manager' || context.user.role === 'project worker') {
    return (
      <div className="Sidebar">
        <h2>Employees</h2>
        <ul className="Sidebar__list">
          <ProjectWorkers expanded={expanded} toggleExpand={toggleExpand} />
        </ul>
      </div>
    );
  } else if (context.user.role === 'admin') {
    //change to admin
    return (
      <div className="Sidebar">
        <h2>PROJECT MANAGERS</h2>
        <ul className="Sidebar__list">
          <ProjectManagers expanded={expanded} toggleExpand={toggleExpand} />
        </ul>
      </div>
    );
  } else return null;
*/
};

export { Sidebar };
