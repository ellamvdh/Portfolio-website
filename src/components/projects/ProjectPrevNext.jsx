import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "../icons/icons.jsx";

export default function ProjectPrevNext({ previous, next }) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      {/* STICKY SIDE NAV */}
      <div className="project-nav-fixed">
        <div className="project-nav-wrapper">
          {previous ? (
            <Link
              to={previous.url}
              onClick={scrollToTop}
              title={`Vorige: ${previous.title}`}
              className="project-nav-button prev"
            >
              <ArrowLeft className="arrow-icon" aria-hidden />
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={next.url}
              onClick={scrollToTop}
              title={`Volgende: ${next.title}`}
              className="project-nav-button next"
            >
              <ArrowRight className="arrow-icon" aria-hidden />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* FOOTER NAV */}
      <nav className="project-footer-nav">
        <div className="footer-nav-wrapper">
          {previous ? (
            <Link to={previous.url} onClick={scrollToTop} className="footer-link prev">
              <ArrowLeft className="footer-arrow" aria-hidden />
              <div className="footer-text">
                <span className="footer-label">Vorige</span>
                <span className="footer-title">{previous.title}</span>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={next.url} onClick={scrollToTop} className="footer-link next">
              <div className="footer-text text-right">
                <span className="footer-label">Volgende</span>
                <span className="footer-title">{next.title}</span>
              </div>
              <ArrowRight className="footer-arrow" aria-hidden />
            </Link>
          ) : <div />}
        </div>
      </nav>
    </>
  );
}
