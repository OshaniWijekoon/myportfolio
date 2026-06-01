import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const skills = {
  Languages: ['Java', 'C', 'C++', 'Kotlin', 'Python', 'HTML/CSS', 'JavaScript'],
  Frameworks: ['React', 'Node.js', 'Express.js', 'Spring Boot'],
  Database: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Figma'],
  Spoken: ['Sinhala', 'English'],
};

const timeline = [
  {
    year: '2022',
    title: 'Started BSc in IT',
    place: 'SLIIT — Sri Lanka Institute of Information Technology',
    desc: 'Began degree in Information Technology, building foundations in programming and software engineering.',
  },
  {
    year: '2023',
    title: '2nd Year — Deepening Skills',
    place: 'SLIIT',
    desc: 'Worked on university group projects, explored MERN stack and UI/UX design principles.',
  },
  {
    year: '2024',
    title: '3rd Year 1st Semester',
    place: 'SLIIT',
    desc: 'Specializing in Information Technology. Building individual and group projects using MERN, Spring Boot and Kotlin.',
  },
];

function About() {
  return (
    <div className="about-page">
      <div className="about-bg">
        <div className="abg-circle c1"></div>
        <div className="abg-circle c2"></div>
        <div className="abg-grid"></div>
      </div>

      <div className="about-content">

        {/* Hero Section */}
        <ScrollReveal delay={0}>
          <div className="about-hero">
            <div className="about-hero-left">
              <div className="badge">About Me</div>
              <h1 className="about-title">
                Passionate about <span className="accent">Technology</span> & <span className="accent">Design</span>
              </h1>
              <p className="about-bio">
                I'm <strong>Oshani Wijekoon</strong>, a 3rd year IT student at <strong>SLIIT</strong>,
                specializing in Information Technology. I have a deep passion for UI/UX Design,
                Business Analysis, and Software Engineering. I enjoy building clean, user-friendly
                applications that solve real problems — from individual projects to university
                group collaborations.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">3rd</span>
                  <span className="stat-label">Year at SLIIT</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects Done</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>

            <div className="about-hero-right">
              <div className="about-avatar-wrap">
                <div className="about-avatar-ring"></div>
                 <img src="/profile.jpg" alt="Oshani Wijekoon" className="avatar-photo" />
                <div className="about-float-badge fb1">SLIIT</div>
                <div className="about-float-badge fb2">BSc IT</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal delay={0.1}>
          <div className="skills-section">
            <h2 className="section-title">
              Skills & <span className="accent">Technologies</span>
            </h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h3 className="skill-cat-title">{category}</h3>
                  <div className="skill-pills">
                    {items.map(skill => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Section */}
        <ScrollReveal delay={0.1}>
          <div className="timeline-section">
            <h2 className="section-title">
              My <span className="accent">Journey</span>
            </h2>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Interests Section */}
        <ScrollReveal delay={0.1}>
          <div className="interests-section">
            <h2 className="section-title">
              What I <span className="accent">Love</span>
            </h2>
            <div className="interests-grid">
              {[
                { icon: '', title: 'UI/UX Design', desc: 'Creating beautiful, intuitive interfaces that users love.' },
                { icon: '', title: 'Business Analysis', desc: 'Bridging the gap between technology and business needs.' },
                { icon: '', title: 'Web Development', desc: 'Building robust, scalable applications with clean code.' },
                { icon: '', title: 'Mobile Development', desc: 'Crafting mobile experiences using Kotlin and React Native.' },
              ].map((item, i) => (
                <div key={i} className="interest-card">
                  <div className="interest-icon">{item.icon}</div>
                  <h3 className="interest-title">{item.title}</h3>
                  <p className="interest-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

export default About;