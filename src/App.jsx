import React, { useState, useEffect } from 'react';
import './App.css'; // استيراد الأنماط الخاصة بك

// مكون Navbar
const Navbar = () => (
  <header>
    <nav className="navbar fade-in">
      <div className="logo">Malak Alotaibi</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Volunteering">Volunteering</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="resume.pdf" target="_blank" className="cv-link">CV</a></li>
      </ul>
    </nav>
  </header>
);

// مكون Home
const Home = () => (
  <section id="home" className="fade-in slide-left">  {/* إضافة slide-left هنا */}

    <div className="home-content">
      <div className="home-text fade-in">
                <h4>
          Malak Alotaibi
        </h4>
        <h3>Welcome to My Portfolio</h3>
        <p>My passion for technology allows me to turn ideas into reality</p>
      </div>
      <div className="home-image fade-in">
        <img src="Myphoto.png" className="myphoto" height="150" width="150" alt="My Photo" />
      </div>
    </div>
  </section>
);

// مكون About
const About = () => (
  <section id="aboutme" className="fade-in slide-right"> {/* إضافة slide-right هنا */}

    <h2 className="fade-in">Who I am</h2>
    <p className="fade-in">
      I am an ambitious third-year Computer Science student specializing in Artificial Intelligence, including Machine Learning, Deep Learning, and Computer Vision.
      Alongside my passion for AI, I am also interested in web development and strive to build modern, user-friendly applications.
      I enjoy combining creativity with technical skills to deliver innovative solutions that make a real impact.
      I am committed to volunteering and continuous learning, always seeking opportunities to grow and contribute positively to the community.
    </p>
  </section>
);


// مكون Skills
const Skills = () => (
  <section id="skills" className="fade-in">
    <h2 className="fade-in">My Skills</h2>

    {/* المهارات التقنية */}
    <div className="dropdown">
      <button className="drop-btn">Technical Skills</button>
      <div className="dropdown-content">
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <span>Python</span>
        </div>
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          <span>Java</span>
        </div>
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
          <span>SQL</span>
        </div>
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
          <span>Figma</span>
        </div>
        <div className="skill">
          <img src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png" alt="Web Development" />
          <span>Web Development</span>
        </div>
        </div>
      </div>
  </section>
);




// مكون Volunteering
const Volunteering = () => {
  const [showMoreManar, setShowMoreManar] = useState(false);
  const [showMoreKeptar, setShowMoreKeptar] = useState(false);

  const handleManarClick = () => setShowMoreManar(!showMoreManar);
  const handleKeptarClick = () => setShowMoreKeptar(!showMoreKeptar);

  return (
    <section id="Volunteering" className="fade-in slide-left"> {/* إضافة slide-left هنا */}

      <h2 className="fade-in">Volunteer Work</h2>

      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <h3>Manar initiative - Student Guide & contribute</h3>
            {showMoreManar && (
              <p className="more-text">
                • Participated in an awareness campaign to introduce the College of Computing's academic programs.<br />
                • Guided students in selecting specializations and contributed to content for a student-support website.
                <br />
               
              </p>
            )}
            <button className="more-btn" onClick={handleManarClick}>
              {showMoreManar ? 'Show less' : 'Show more'}
            </button>
          </div>

          <div className="slide">
            <h3>Keptar Community - Public Relations & Project Management</h3>
            {showMoreKeptar && (
              <p className="more-text">
                • Supported PR efforts by engaging with partner organizations and enhancing collaborations.
                • Contributed to technical training and helped in planning and managing internal projects.
              </p>
            )}
            <button className="more-btn" onClick={handleKeptarClick}>
              {showMoreKeptar ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


// مكون Projects
const Projects = () => {
  const [showMoreSmartLighting, setShowMoreSmartLighting] = useState(false);
  const [showMoreSDAIA, setShowMoreSDAIA] = useState(false);
  const [showMoreBurnDegree, setShowMoreBurnDegree] = useState(false);
  const [showMoreTechWay, setShowMoreTechWay] = useState(false);

  return (
    <section id="projects" className="fade-in slide-right"> {/* إضافة slide-right هنا */}

      <h2 className="fade-in">My Projects</h2>

      <div className="slider-container">
        <div className="slider">
          {/* مشروع Smart lighting control using hand gestures */}
          <div className="slide">
            <h3>Smart lighting control using hand gestures</h3>
            {showMoreSmartLighting && (
              <p className="more-text">
                Developed a lighting control system using Arduino Uno and computer vision techniques. The system detects the number of raised fingers through a webcam and controls lights accordingly.
                <br />
                Technologies: Python, Arduino, OpenCV, cvzone, PySerial
              </p>
            )}
            <button className="more-btn" onClick={() => setShowMoreSmartLighting(!showMoreSmartLighting)}>
              {showMoreSmartLighting ? 'Show less' : 'Show more'}
            </button>
          </div>

          {/* مشروع SDAIA Database Design Project */}
          <div className="slide">
            <h3>SDAIA Database Design Project</h3>
            {showMoreSDAIA && (
              <p className="more-text">
                Created a relational database model for managing SDAIA's internal structure, including departments, employees, projects, and task assignments.
                <br />
                Core Concepts: ER modeling, relational design, normalization, SQL
              </p>
            )}
            <button className="more-btn" onClick={() => setShowMoreSDAIA(!showMoreSDAIA)}>
              {showMoreSDAIA ? 'Show less' : 'Show more'}
            </button>
          </div>

          {/* مشروع Burn Degree Classification Using CNN */}
          <div className="slide">
            <h3>Burn Degree Classification Using CNN</h3>
            {showMoreBurnDegree && (
              <p className="more-text">
                Built a deep learning model using Convolutional Neural Networks (CNN) to classify burn severity from user-uploaded images.
                <br />
                Technologies: Python, TensorFlow, CNN, Tkinter
              </p>
            )}
            <button className="more-btn" onClick={() => setShowMoreBurnDegree(!showMoreBurnDegree)}>
              {showMoreBurnDegree ? 'Show less' : 'Show more'}
            </button>
          </div>

          {/* مشروع Tech Way - Front End Project */}
          <div className="slide">
            <h3>Tech Way - Front End Project</h3>
            {showMoreTechWay && (
              <p className="more-text">
                • Developed a web-based platform using HTML, CSS, and JavaScript to guide beginners in exploring tech career paths.
                <br />
                • Built interactive features including a landing page, career quiz, and learning roadmaps.
              </p>
            )}
            <button className="more-btn" onClick={() => setShowMoreTechWay(!showMoreTechWay)}>
              {showMoreTechWay ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};






// مكون Footer
const Footer = () => (
  <footer className="fade-in">
    <h3>Connect with me:</h3>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/malakalotaibi" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/malakcodes" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
      </a>
      <a href="mailto:Malak.Allotaibi@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
      </a>
    </div>
    <p>&copy; 2026 Malak Alotaibi</p>
  </footer>
);


const App = () => {
  useEffect(() => {
    // على تحميل الصفحة، إضافة الكلاس 'visible' لجميع العناصر
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => {
      el.classList.add('visible');
    });
  }, []); // يتم تنفيذ هذا فقط عند تحميل الصفحة

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Volunteering />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;