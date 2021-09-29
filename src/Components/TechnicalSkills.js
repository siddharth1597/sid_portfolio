const TechnicalSkills = (props) => {
  const {name, skills} = props.skills;
  
  return(
    <div className="col-md-4 pt-5">
      <h1 className="title-heading">{name}</h1>
      <div className="software-skills-info ms-2">
        <div className="mt-3">
          {
            skills.map((name, pos) => {
              return(
                <div className="langauge-skills text-light ms-3 h3" key={pos}>{name}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;