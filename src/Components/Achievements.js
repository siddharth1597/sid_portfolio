const Achievements = (props) => {
  const {name, recognition} = props.awards;

  return(
    <div className="col-md-4 pt-5">
      <h1 className="title-heading">{name}</h1>
      <div className="achievements-info ms-2">
        {
          recognition.map((points, pos) => {
            return(
              <div className="d-flex achievements-details" key={pos}>
                <i className="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">{points}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Achievements;