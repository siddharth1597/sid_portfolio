const TechnicalSkills = (props) => {
  const { name, skills, categories } = props.skills;

  if (categories) {
    return (
      <div className="col-lg-4 col-md-6 pt-5 section-block">
        <h2 className="title-heading">{name}</h2>
        <div className="block-list">
          {categories.map((category, pos) => (
            <article className="resume-block" key={pos}>
              <h3 className="skill-category-label mb-2">{category.label}</h3>
              <div className="skill-pills">
                {category.skills.map((skill, index) => (
                  <span className="langauge-skills text-light" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-4 col-md-6 pt-5 section-block">
      <h2 className="title-heading">{name}</h2>
      <article className="resume-block">
        <div className="skill-pills">
          {skills.map((skill, pos) => (
            <span className="langauge-skills text-light" key={pos}>
              {skill}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default TechnicalSkills;
