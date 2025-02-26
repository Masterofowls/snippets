// Hero Section Component
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Site</h1>
        <p>Discover amazing things with us</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

// Hero with Background Image
const HeroWithBg = ({ bgImage }) => {
  return (
    <section 
      className="hero-bg"
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <div className="hero-overlay">
        <h1>Welcome</h1>
        <p>Your journey starts here</p>
      </div>
    </section>
  );
};

// Hero with Video Background
const VideoHero = ({ videoUrl }) => {
  return (
    <section className="video-hero">
      <video autoPlay muted loop className="hero-video">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="video-content">
        <h1>Experience Innovation</h1>
      </div>
    </section>
  );
};

// Animated Hero
const AnimatedHero = () => {
  return (
    <section className="animated-hero">
      <div className="animated-content">
        <h1 className="fade-in">Welcome</h1>
        <p className="slide-up">Discover the future</p>
        <button className="bounce">Learn More</button>
      </div>
    </section>
  );
};

// Parallax Hero
const ParallaxHero = () => {
  return (
    <section className="parallax-hero">
      <div className="parallax-layer back"></div>
      <div className="parallax-layer middle"></div>
      <div className="parallax-layer front">
        <h1>Adventure Awaits</h1>
      </div>
    </section>
  );
};

// Interactive Hero
const InteractiveHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className={`interactive-hero ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="interactive-content">
        <h1>Explore</h1>
        <p>Hover to discover more</p>
      </div>
    </section>
  );
};

// Responsive Hero
const ResponsiveHero = () => {
  return (
    <section className="responsive-hero">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/hero-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="/hero-tablet.jpg" />
        <img src="/hero-mobile.jpg" alt="Hero" className="hero-img" />
      </picture>
      <div className="responsive-content">
        <h1>Responsive Design</h1>
      </div>
    </section>
  );
};

// Best Practices:
/*
1. Performance
   - Optimize images and videos
   - Use proper lazy loading
   - Implement proper caching
   - Minimize animation complexity

2. Accessibility
   - Use semantic HTML
   - Add proper ARIA labels
   - Ensure keyboard navigation
   - Maintain proper contrast

3. Responsive Design
   - Mobile-first approach
   - Use flexible units
   - Implement breakpoints
   - Test across devices

4. SEO
   - Proper heading hierarchy
   - Alt text for images
   - Semantic structure
   - Optimized content

5. User Experience
   - Clear call-to-action
   - Readable text
   - Appropriate spacing
   - Intuitive navigation
*/

export {
  Hero,
  HeroWithBg,
  VideoHero,
  AnimatedHero,
  ParallaxHero,
  InteractiveHero,
  ResponsiveHero
};
