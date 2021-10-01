const Contact = (props) => {
  const {name, details, social_id} = props.contact;

  return(
    <>
      <h1 className="title-heading">{name}</h1>
      <div className="contact-info ms-2">
        <div className="d-flex">
          <i className="fas fa-map-marker-alt text-light my-auto h5"></i>
          <a href={`https://www.google.com/maps/place/${details.location}`} target="_blank" rel="noreferrer" className="text-light ms-3 h5 my-auto text-decoration-none" title="Click to check location">{details.location}</a>
        </div>
        <div className="d-flex">
          <i className="fas fa-envelope text-light my-auto h5"></i>
          <a href={ `mailto:${details.email}`} className="text-light ms-3 h5 my-auto text-decoration-none" title="Click to mail">{details.email}</a>
        </div>
        <div className="d-flex">
          <i className="fas fa-mobile-alt text-light my-auto h5"></i>
          <a href={ `tel:${details.phone}` } className="text-light ms-3 h5 my-auto text-decoration-none" title="Click to call">{details.phone}</a>
        </div>
      </div>
      <hr className="text-light" />
      <div className="social-links ms-2">
        <div className="d-flex">
          <i className="fab fa-linkedin text-light my-auto h5"></i>
          <a href={`https://${social_id.linkedin}`} target="_blank" rel="noreferrer" className="text-light ms-3 h5 my-auto text-decoration-none">{social_id.linkedin}</a>
        </div>
      </div>
    </>
  );
}

export default Contact;