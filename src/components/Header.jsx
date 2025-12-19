import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname.startsWith("/projects");
    }
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="logo"
        >
          Portfolio
        </Link>

        {/* Navigation links */}
        <div className="nav-links">
          <Link
            to="/"
            onClick={scrollToTop}
            className={`nav-link ${isActive("/") ? "nav-active" : ""}`}
          >
            Projecten
          </Link>

          <Link
            to="/about"
            onClick={scrollToTop}
            className={`nav-link ${isActive("/about") ? "nav-active" : ""}`}
          >
            Over Mij
          </Link>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className={`nav-link ${isActive("/contact") ? "nav-active" : ""}`}
          >
            Contacten
          </Link>
        </div>
      </nav>
    </header>
  );
}
