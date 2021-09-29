const Education = (props) => {
  const {name, education} = props.education;

  return(
    <div className="col-md-3 pt-5 my-auto position-relative">
      <h1 className="title-heading">{name}</h1>
      <div className="education-info ms-2">
        <div className="d-flex">
          <div className="tag">
            <div className="rectangle">{education.year}</div>
            <div className="right-triangle"></div>
          </div>
          <div className="ms-3 company-work-details">
            <div className="text-light h5 mb-0 fw-bold">{education.course}</div>
            <small className="h6 stream">{education.stream}</small>
          </div>
        </div>
      </div>
      <div className="d-flex mt-3 ms-2 position-relative">
        <i className="fas fa-university text-light h5"></i>
        <div className="text-light h5 ms-3">{education.university}</div>
      </div>
      
      <div className="line w-25 height-line"></div>
      <div className="line h-25 width-line"></div>
    </div>
  );
}

export default Education;