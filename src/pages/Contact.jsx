import { siteConfig } from "../siteConfig";
import { GitHub, LinkedIn, Itch, Envelope, ChevronRight } from "../components/icons/icons.jsx";

export default function Contact() {
  const socialLinks = [
    { name: "GitHub", url: siteConfig.socials.github, description: "Bekijk mijn code en projecten", icon: <GitHub className="icon" /> },
    { name: "LinkedIn", url: siteConfig.socials.linkedin, description: "Connect met mij", icon: <LinkedIn className="icon" /> },
    { name: "Itch.io", url: siteConfig.socials.itch, description: "Speel mijn games", icon: <Itch className="icon" /> },
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-tagline">
            Interesse in samenwerking of gewoon een vraag? Neem gerust contact op!
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-grid">
          {/* Email CTA */}
          <div className="contact-email-card">
            <div className="contact-email-icon-wrapper">
              <Envelope className="contact-email-icon" />
            </div>
            <h2 className="contact-email-title">Direct contact</h2>
            <p className="contact-email-text">
              Stuur me een email en ik reageer zo snel mogelijk.
            </p>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="contact-email-link"
            >
              <Envelope className="icon" />
              {siteConfig.socials.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="contact-socials">
            <h2 className="contact-socials-title">Socials</h2>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-card"
              >
                <div className="contact-social-icon-wrapper">
                  {social.icon}
                </div>
                <div className="contact-social-content">
                  <h3 className="contact-social-name">{social.name}</h3>
                  <p className="contact-social-description">{social.description}</p>
                </div>
                <ChevronRight className="contact-social-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
