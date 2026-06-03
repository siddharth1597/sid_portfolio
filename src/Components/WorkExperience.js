import { useState } from 'react';

const INITIAL_BULLETS = 3;

const WorkExperience = (props) => {
  const { name, company } = props.work;
  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleJob = (index) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const company_experience = company.map((current, pos) => {
    const isExpanded = expandedJobs[pos];
    const hasMore = current.summary.length > INITIAL_BULLETS;
    const visibleBullets = isExpanded || !hasMore
      ? current.summary
      : current.summary.slice(0, INITIAL_BULLETS);

    return (
      <article key={pos} className="resume-block">
        <div className="block-tag">
          <div className="tag">
            <div className="rectangle">{current.year}</div>
            <div className="right-triangle"></div>
          </div>
        </div>
        <div className="block-body">
          <h3 className="block-title text-light mb-1">
            {current.company_name}
            {current.current && <span className="current-org"> (Current)</span>}
          </h3>
          <p className="block-subtitle text-light mb-1">{current.designation}</p>
          {current.location && (
            <p className="block-meta mb-2">
              <i className="fas fa-map-marker-alt me-1" aria-hidden="true"></i>
              {current.location}
            </p>
          )}
          <ul className="block-list-items mb-0">
            {visibleBullets.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
          {hasMore && (
            <button
              type="button"
              className="block-toggle btn btn-link p-0"
              onClick={() => toggleJob(pos)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show less' : `+${current.summary.length - INITIAL_BULLETS} more`}
            </button>
          )}
        </div>
      </article>
    );
  });

  return (
    <div className="col-lg-4 col-md-6 pt-5 section-block work-experience-column">
      <h2 className="title-heading">{name}</h2>
      <div className="block-list">{company_experience}</div>
    </div>
  );
};

export default WorkExperience;
