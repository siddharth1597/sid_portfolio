const Certifications = (props) => {
  const { name, certificates, linkedin_badges } = props.certifications;

  return (
    <div className="col-lg-4 col-md-6 pt-5 section-block mt-0">
      <h2 className="title-heading">{name}</h2>
      <div className="block-list">
        {certificates.map((detail, pos) => (
          <article className="resume-block flex-row" key={pos}>
            <div className="block-tag">
              <div className="tag">
                <div className="rectangle">{detail.year}</div>
                <div className="right-triangle"></div>
              </div>
            </div>
            <div className="block-body">
              <h3 className="block-title text-light mb-1">{detail.project_name}</h3>
              <p className="block-meta stream mb-0">{detail.platform}</p>
            </div>
          </article>
        ))}
        <article className="resume-block">
          <p className="text-light mb-0 block-meta">
            <span className="stream">
              <i className="fas fa-medal stream me-1" aria-hidden="true"></i>
              LinkedIn Badges:
            </span>{' '}
            {linkedin_badges}
          </p>
        </article>
      </div>
    </div>
  );
};

export default Certifications;
