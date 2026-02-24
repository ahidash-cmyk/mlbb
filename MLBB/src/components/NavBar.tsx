const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">MLBB</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;