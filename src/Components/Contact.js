const Contact = (props) => {
  const {name, details, social_id} = props.contact;

  return(
    <>
      <h1 className="title-heading">{name}</h1>
      <div className="contact-info ms-2">
        <div className="d-flex">
          <i className="fas fa-map-marker-alt text-light my-auto h5"></i>
          <span className="text-light ms-3 h5 my-auto">{details.location}</span>
        </div>
        <div className="d-flex">
          <i className="fas fa-envelope text-light my-auto h5"></i>
          <span className="text-light ms-3 h5 my-auto">{details.email}</span>
        </div>
        <div className="d-flex">
          <i className="fas fa-mobile-alt text-light my-auto h5"></i>
          <span className="text-light ms-3 h5 my-auto">{details.phone}</span>
        </div>
      </div>
      <hr className="text-light" />
      <div className="social-links ms-2">
        <div className="d-flex">
          <i className="fab fa-linkedin text-light my-auto h5"></i>
          <span className="text-light ms-3 h5 my-auto">{social_id.linkedin}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;