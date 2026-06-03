const Header = (props) => {
  return (
    <header className="resume-header text-center">
      <h1 className="text-light display-4 mt-3 name">{props.name}</h1>
      <p className="designation text-light d-flex justify-content-center h5 my-auto" aria-live="polite">
        <span className="my-auto designation-text">{props.designation}</span>
        <span className="blink h4 mb-0 ms-1" aria-hidden="true">|</span>
      </p>
    </header>
  );
};

export default Header;
