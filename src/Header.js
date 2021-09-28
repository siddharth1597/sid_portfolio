const Header = (props) => {
  return(
    <>
      <h1 className="text-light text-center display-4 mt-3 name">{props.name}</h1>
      <small className="designation text-light d-flex justify-content-center h5">{props.designation}</small>
    </>
  );

}

export default Header;