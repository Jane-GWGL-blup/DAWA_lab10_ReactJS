const Header = () => {
    return (
      <header className="header">
        <nav className="nav">
            <div href="" id="logo"><h1>
            <span id="css">CSS</span>
            <span id="day">Logo</span>
            </h1>
            </div>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a className="nav-menu-link nav-link" href="/">Home</a>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link nav-link" href="/about">About me</a>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link nav-link" href="/contact">Portafolio</a>
            </li>
          </ul>
   
        </nav>
      </header>
    );
   }
   
   export default Header;
   