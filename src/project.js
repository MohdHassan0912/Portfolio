import Common from "./common";
import Common1 from "./common1";
import "./project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <Common />
      <div className="r2">
        <div className="c3">
          <div className="img-div">
            <img className="img1" src={require("./image/mypic.jpeg")} />
          </div>
        </div>
        <div className="c4">
          <div className="c4-1">
            <h4 className="h1">
              Hey I'm <span className="text-success">Mohd Hassan</span>
              <br /> I'm a <span className="text-success">Web Developer</span>
            </h4>
            <p>
       I specialize in front-end development using modern technologies such as React, HTML, CSS, and JavaScript. I enjoy solving problems and turning ideas into real, interactive web applications.
            </p>
            <br />
            <a href="https://wa.me/+917991948390">
              <i className="fa-brands  fa-whatsapp "></i>
            </a>
            <a href="https://www.instagram.com/__h_a_s_s_a_n_7">
              <i className="fa-brands  fa-instagram "></i>
            </a>
            <a href="https://www.facebook.com/Mohd Hassan">
              <i className="fa-brands  fa-facebook "></i>
            </a>
            <a href="https://www.linkedin.com/in/Mohd Hassan">
            <i className="fa-brands  fa-linkedin "></i>
            </a>
            <a href="https://twitter.com/@MohdHas29732233">
            <i className="fa-brands  fa-twitter "></i>
            </a>
            <br />
            <br />
            <br />
            {/* <a href="./docs/Mohd HASSAN CV -1.pdf" download="cv.pdf">
              <button className="btn btn-success btn1">Hire me</button>
            </a> */}
            <a href="https://drive.google.com/file/d/1cmyZaQ4wMybUmApjjYW9mlKSt3Vznc5H/view?usp=sharing">
            <button className="btn btn-success btn1">Hire me</button>
            </a>
          </div>
        </div>
      </div>


<div className="technologies">
  <h2>Technologies I Work With</h2>
  <p>Modern tools for modern solutions</p>
  <div className="tech-icons">
    <img src={require("./image/html.png")} alt="HTML" />
    <img src={require("./image/css.png")} alt="CSS" />
    <img src={require("./image/javascript.png")} alt="JavaScript" />
    <img src={require("./image/react.png")} alt="React" />
    <img src={require("./image/node.png")} alt="Node.js" />
    <img src={require("./image/mongodb.png")} alt="MongoDB" />
    <img src={require("./image/express.png")} alt="Express" />
    {/* Add more icons as needed */}
  </div>
</div>

<div className="portfolio">
  <button className="tag">Featured Projects</button>
  <h2>Interactive Portfolio</h2>
  <p>
    Explore <b>real results</b> from my recent projects. Each solution delivered 
    <b> measurable business impact</b> for clients.
  </p>

  <div className="project-card">
    <div className="project-image">
      <img src="/images/laptop.png" alt="Project Preview" />
    </div>
    <div className="project-info">
      <h3>Wellness TCYS</h3>
      <p>Comprehensive wellness platform for practitioners and clients.</p>
      <div className="project-buttons">
        <a href="#" className="btn-primary">View Case Study</a>
        <a href="#" className="btn-secondary">Visit Website</a>
      </div>
    </div>
  </div>
  <a href="#" className="btn-primary view-all">View All Projects</a>
</div>

<div className="success-stories">
  <h2>Client Success Stories</h2>
  <p>
    Hear from our satisfied clients about their experience working with us and 
    the results we’ve delivered.
  </p>
  <div className="stats">
    <div className="stat-card"><h3>50+</h3><p>Projects Delivered</p></div>
    <div className="stat-card"><h3>40+</h3><p>Happy Clients</p></div>
    <div className="stat-card"><h3>5+</h3><p>Years Experience</p></div>
    <div className="stat-card"><h3>98%</h3><p>Client Satisfaction</p></div>
  </div>
</div>


{/* -------- Client Reviews -------- */}
<div className="reviews">
  <h2>What Clients Say</h2>
  <div className="reviews-grid">
    <div className="review-card">
      <h4>Omar Turner</h4>
      <p className="role">CEO, Brims Media</p>
      <p>
        Marc was a fantastic professional! His big communication skills and easy to work with.
        Highly recommend his services.
      </p>
    </div>

    <div className="review-card">
      <h4>Bradley Thompson</h4>
      <p className="role">Marketing Director</p>
      <p>
        Marc’s expertise in web development is outstanding. Delivered exactly what I needed.
      </p>
    </div>

    <div className="review-card">
      <h4>Jayden Younglesson</h4>
      <p className="role">CFO, Vox Capital</p>
      <p>
        Incredible pleasure working alongside Marc. Strong work ethic, dedication, and results!
      </p>
    </div>

    <div className="review-card">
      <h4>Yaron Peretz</h4>
      <p className="role">CEO, Tech Startup</p>
      <p>
        Marc was phenomenal in building the landing page. He cares deeply about client success.
      </p>
    </div>

    <div className="review-card">
      <h4>Guneet K. Singh</h4>
      <p className="role">TV Producer</p>
      <p>
        My team enjoyed working with Marc. Always professional, patient, and results-driven.
      </p>
    </div>

    <div className="review-card">
      <h4>Ezra Rubinson</h4>
      <p className="role">Marketing Agency Owner</p>
      <p>
        Fantastic work Marc! Thank you for building my dream website!
      </p>
    </div>
  </div>
  <button className="btn-secondary show-more">Show More Reviews</button>
</div>

{/* -------- Expertise Section -------- */}
<div className="expertise">
  <button className="tag">Our Expertise</button>
  <h2>Full-Stack Design Expertise</h2>
  <p>
    Delivering <b>measurable results</b> through strategic thinking 
    and technical excellence.
  </p>

  <div className="progress-box">
    <div className="progress-header">
      <span>⚡ Coding in Progress...</span>
      <span>100%</span>
    </div>
    <div className="progress-bar">
      <div className="progress-fill"></div>
    </div>
    <div className="progress-steps">
      <div>
        <h4>🎨 Design Phase</h4>
        <ul>
          <li>User Research</li>
          <li>Wireframing</li>
          <li>UI Design</li>
        </ul>
      </div>
      <div>
        <h4>🛠 Development Phase</h4>
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Testing</li>
        </ul>
      </div>
    </div>
    <p className="success-msg">✅ Project Successfully Completed 🚀</p>
  </div>
</div>


{/* -------- Expertise Cards -------- */}
<div className="expertise-cards">
  <div className="expertise-card">
    <h3>📊 Strategy & Planning</h3>
    <p>
      Innovative 360° plans with strategic planning, roadmap design, and business
      alignment for successful product launches.
    </p>
    <span>Market Research · Agile Planning</span>
  </div>

  <div className="expertise-card">
    <h3>🎨 UI/UX Design</h3>
    <p>
      User-centered design for 40%+ user retention. Wireframes, prototypes, and
      modern UI design.
    </p>
    <span>Wireframing · Prototyping · Design Thinking</span>
  </div>

  <div className="expertise-card">
    <h3>💻 Development</h3>
    <p>
      End-to-end development with React, Node.js, and TypeScript. Scalable and
      future-proof code.
    </p>
    <span>React · Node.js · TypeScript</span>
  </div>

  <div className="expertise-card">
    <h3>🗄 Database Architecture</h3>
    <p>
      Reliable systems with PostgreSQL and MongoDB. Efficient queries, optimized
      schema, and performance tuning.
    </p>
    <span>PostgreSQL · MongoDB · Query Optimization</span>
  </div>

  <div className="expertise-card">
    <h3>🔒 Security & Performance</h3>
    <p>
      Performance-driven apps with robust security, caching, and load balancing
      systems.
    </p>
    <span>Authentication · Load Balancing · Caching Strategy</span>
  </div>

  <div className="expertise-card">
    <h3>🤖 AI Integration</h3>
    <p>
      Automated workflows and AI-powered solutions to accelerate growth and
      enhance customer experiences.
    </p>
    <span>Machine Learning · Predictive Analytics</span>
  </div>
</div>

{/* -------- Development Process -------- */}
<div className="dev-process">
  <div className="process">
    <h3>Our Development Process</h3>
    <ul>
      <li><b>1. Discovery & Strategy</b> – 35% more efficient outcomes through comprehensive analysis.</li>
      <li><b>2. Design & Prototyping</b> – 40% higher engagement with tested interfaces and modern visuals.</li>
      <li><b>3. Development & Testing</b> – 98%+ PageSpeed scores through optimized code and rigorous testing.</li>
      <li><b>4. Launch & Support</b> – 99.9% uptime with continuous monitoring and proactive maintenance.</li>
    </ul>
  </div>

  <div className="tech">
    <h3>Technologies We Use</h3>
    <div className="tech-grid">
      <div>
        <h4>Frontend</h4>
        <p>React · Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
      </div>
      <div>
        <h4>Backend</h4>
        <p>Node.js · PostgreSQL · MongoDB · Redis · Docker</p>
      </div>
    </div>
  </div>
</div>

{/* -------- What I Deliver -------- */}
<div className="deliver">
  <button className="tag">Services</button>
  <h2>What I Deliver</h2>
  <p>
    <b>Results-focused solutions</b> tailored to your specific business goals
  </p>

  <div className="deliver-grid">
    <div className="deliver-card">
      <h3>🌐 Web Development</h3>
      <p>
        SEO-optimized websites & apps that drive 50%+ higher conversions and
        deliver business value.
      </p>
      <ul>
        <li>Responsive across all devices</li>
        <li>Custom integrations & APIs</li>
        <li>Scalable architectures</li>
      </ul>
      <a href="#">Learn More →</a>
    </div>

    <div className="deliver-card">
      <h3>🎨 UI/UX Design</h3>
      <p>
        User-centered design decisions that improve user retention and enhance
        experiences.
      </p>
      <ul>
        <li>Wireframing & Prototyping</li>
        <li>UI Kits & Design Systems</li>
        <li>Intuitive workflows</li>
      </ul>
      <a href="#">Learn More →</a>
    </div>

    <div className="deliver-card">
      <h3>⚡ SaaS Development</h3>
      <p>
        End-to-end SaaS solutions that scale with your business and reduce
        operational costs.
      </p>
      <ul>
        <li>Scalable infrastructure</li>
        <li>Subscription systems</li>
        <li>Secure authentication</li>
      </ul>
      <a href="#">Learn More →</a>
    </div>
  </div>
</div>

{/* -------- Call to Action -------- */}
<div className="cta">
  <h2>Ready to Transform Your Business?</h2>
  <p>
    Claim your FREE 30-min strategy call and discover how my proven approach can
    help you outperform competitors and drive measurable growth.
  </p>
  <button className="btn-primary">Claim Your Free Strategy Call →</button>
</div>

      <Common1/>
    </>
  );
};
export default Project;
