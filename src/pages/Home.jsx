import { siteConfig } from "../siteConfig";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        
        {/* Decorative glow behind profile photo */}
        <div className="hero-glow"></div>
        
        {/* Hero content */}
        <div className="hero-content">
          
          {/* Profile photo */}
          <img
            src={siteConfig.aboutImage}
            alt={siteConfig.name}
            className="hero-img"
          />

          {/* Name */}
          <h1 className="hero-title">{siteConfig.name}</h1>

          {/* Role */}
          <p className="hero-subtitle">{siteConfig.role}</p>

          {/* Tagline */}
          <p className="hero-tagline">{siteConfig.tagline}</p>
        </div>
      </section>
    </div>
  );
}
