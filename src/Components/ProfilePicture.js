const ProfilePicture = (props) => {

  const {profile_pic, about} = props;

  return(
    <div className="col-md-4 position-relative profile-info">
      <div className="line h-100 width-line"></div>
      <div className="bg-warning profile mx-auto mt-5">
        <img className="profile-pic" src={profile_pic} alt="profic pic" />
      </div>
      <div className="line w-25 height-line"></div>
      <div className="description px-5 pt-5">
        <p className="text-light">{about}</p>
      </div>
    </div>
  );
}

export default ProfilePicture;