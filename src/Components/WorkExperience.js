const WorkExperience = (props) => {

  const {name, company} = props.work;

  const company_experience = company.map((current, pos) => {
    return(
      <div key={pos} className="experience-info ms-2">
        <div className="d-flex">
          <div className="tag">
            <div className="rectangle">{current.year}</div>
            <div className="right-triangle"></div>
          </div>
          <div className="ms-3 company-work-details">
            <div className="text-light h5 mb-0 fw-bold">{current.company_name} <span className="current-org">{ current.current && '(Current)'}</span></div>
            <small className="text-light h6 font-semibold"  data-bs-toggle="tooltip">{current.designation}</small>
            <ul className="text-light mt-2 experience-points">
              {
                current.summary.map((info, pos) => {
                  return(
                    <li key={pos}>{info}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  })
  

  return(
    <div className="col-md-4 pt-5 position-relative">
      <h1 className="title-heading">{name}</h1>
      
      { company_experience }
       
      <div className="line h-10 width-line"></div>
      <div className="line w-75 height-line"></div>
    </div>
  );
}

export default WorkExperience;