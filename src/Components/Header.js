const Header = (props) => {
  return(
    <>
      <h1 className="text-light text-center display-4 mt-3 name">{props.name}</h1>
      <small className="designation text-light d-flex justify-content-center h4 my-auto">
        <span className="my-auto">{props.designation}</span>
        <span className="blink h2 mb-0">|</span>
      </small>
    </>
  );

}

export default Header;