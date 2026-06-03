const PersonalProjects = (props) => {
  const { name, projects } = props.projects;

  const personal_projects = projects.map((current, pos) => (
    <article className="resume-block flex-row presonal-block" key={`${current.project_name}-${pos}`}>
      <div className="block-tag">
        <div className="tag">
          <div className="rectangle">{current.year}</div>
          <div className="right-triangle"></div>
        </div>
      </div>
      <div className="block-body">
        <h3 className="block-title text-light mb-1">{current.project_name}</h3>
        <p className="block-meta stream mb-0">{current.type}</p>
      </div>
    </article>
  ));

  return (
    <section className="mt-4 section-block" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="title-heading">{name}</h2>
      <div className="block-list projects-scroll">{personal_projects}</div>
      <article className="resume-block tech-stack-block mt-3">
        <p className="text-light mb-0 block-meta">
          <span className="stream">
            <i className="fas fa-globe stream me-1" aria-hidden="true"></i>
            Tech Stack:
          </span>{' '}
          {props.stack}
        </p>
      </article>
    </section>
  );
};

export default PersonalProjects;
