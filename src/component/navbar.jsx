
const Navbar = ({ setCat }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCat("technology")}>Technology</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCat("business")}>Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCat("health")}>Health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCat("sports")}>Sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCat("entertainment")}>Entertainment</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
