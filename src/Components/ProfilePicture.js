const ProfilePicture = (props) => {
  const { profile_pic, about } = props;

  return (
    <div className="col-12 profile-info section-block">
      <div className="bg-warning profile mx-auto mt-5">
        <img className="profile-pic" src={profile_pic} alt="Siddharth Rastogi profile" />
      </div>
      <div className="description px-lg-3 px-2 pt-4">
        <article className="resume-block summary-block">
          <h2 className="summary-label mb-2">Professional Summary</h2>
          <p className="text-light summary-text mb-0">{about}</p>
        </article>
      </div>
    </div>
  );
};

export default ProfilePicture;
