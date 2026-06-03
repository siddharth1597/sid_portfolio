const Achievements = (props) => {
  const { name, recognition } = props.awards;

  return (
    <div className="col-lg-4 col-md-6 pt-5 section-block">
      <h2 className="title-heading">{name}</h2>
      <div className="block-list">
        {recognition.map((points, pos) => (
          <article className="resume-block block-row" key={pos}>
            <i className="fas fa-star stream block-icon" aria-hidden="true"></i>
            <p className="text-light block-text mb-0">{points}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
