const Certifications = (props) => {
  const {name, certificates, linkedin_badges} = props.certifications;

  return(
    <div className="col-md-4 pt-5">
      <h1 className="title-heading">{name}</h1>
      <div className="certification-info ms-2">
        {
          certificates.map((detail, pos) => {
            return(
              <div className="d-flex" key={pos}>
                <div className="tag">
                  <div className="rectangle">{detail.year}</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 certification-details">
                  <div className="text-light h5 mb-0">{detail.project_name}</div>
                  <small className="h6 font-semibold stream">{detail.platform}</small>
                </div>
              </div>
            )
          })
        }
        <div className="text-light mt-2">
          <span className="stream"><i className="fas fa-medal stream"></i> LinkedIn Badges: </span>
          {linkedin_badges}
        </div>
      </div>
    </div>
  );
}

export default Certifications;