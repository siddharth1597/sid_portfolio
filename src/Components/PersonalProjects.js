const PersonalProjects = (props) => {
  const {name, projects} = props.projects;

  const personal_projects = projects.map((current, pos) => {
    return(
      <div className="d-flex" key={pos}>
        <div className="tag">
          <div className="rectangle">{current.year}</div>
          <div className="right-triangle"></div>
        </div>
        <div className="ms-3 company-work-details">
          <div className="text-light h5 mb-0">{current.project_name}</div>
          <small className="h6 font-semibold stream">{current.type}</small>
        </div>
      </div>
    );
  });

  return(
    <div className="mt-5">
      <h1 className="title-heading">{name}</h1>
      <div className="personal-project-info ms-2">
        {personal_projects}

        <div className="text-light mt-2">
          <span className="stream"><i className="fas fa-globe stream"></i> Tech Stack: </span>
          {props.stack}
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;