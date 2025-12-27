import { siteConfig } from "../siteConfig";
import { Download, Users, Tech } from "../components/icons/icons.jsx";

export default function About() {
  const paragraphs = siteConfig.aboutLong
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">Over mij</h1>
        <p className="about-tagline">{siteConfig.tagline}</p>
      </div>

      <div className="about-container">
        <div className="about-grid">
          {/* Right Column */}
          <div className="about-column profile-column">
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <div className="profile-image-glow" />
                <img
                  src={siteConfig.aboutImage}
                  alt={siteConfig.name}
                  className="profile-image"
                />
              </div>

              <div className="profile-info">
                <h3 className="profile-name">{siteConfig.name}</h3>
                <p className="profile-role">{siteConfig.role}</p>
              </div>

              <a
                href={siteConfig.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-cv"
              >
                <Download className="icon" />
                Download CV
              </a>
            </div>
          </div>

          {/* Left Column */}
          <div className="about-column bio-column">
            {/* Bio */}
            <section className="bio-card">
              <h2 className="bio-title"> </h2> 
              <div className="bio-text">
                {paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </section>

            {/* Skills */}
            <div className="skills-grid">
              {/* Soft Skills */}
              <section className="skills-card">
                <h3 className="skills-title">
                  <Users className="icon" />
                  Soft Skills
                </h3>
                <ul>
                  {siteConfig.softSkills.map((skill) => (
                    <li key={skill}>
                      <span className="bullet">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Hard Skills */}
              <section className="skills-card">
                <h3 className="skills-title">
                  <Tech className="icon" />
                  Hard Skills
                </h3>
                <ul>
                  {siteConfig.hardSkills.map((skill) => (
                    <li key={skill}>
                      <span className="bullet">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
