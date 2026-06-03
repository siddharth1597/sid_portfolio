const Education = (props) => {
  const { name, education } = props.education;

  return (
    <div className="col-12 pt-5 px-3 section-block">
      <h2 className="title-heading">{name}</h2>
      <article className="resume-block">
        <div className="block-tag">
          <div className="tag">
            <div className="rectangle">{education.year}</div>
            <div className="right-triangle"></div>
          </div>
        </div>
        <div className="block-body">
          <h3 className="block-title text-light mb-1">{education.course}</h3>
          <p className="block-meta stream mb-2">{education.stream}</p>
          <p className="block-meta mb-0">
            <i className="fas fa-university me-2" aria-hidden="true"></i>
            {education.university}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Education;
