import Common from "./common";
import Common1 from "./common1";

const Service = () => {
  return (
    <>
      <Common />
      <section className="services-section">
        <div className="services-header">
          <h2>My <span>Services</span></h2>
          <p>Providing end-to-end web solutions from design to development</p>
        </div>

        <div className="services-grid">
          {/* Web Design */}
          <div className="service-card">
            <h3>Web Design</h3>
            <p className="highlight">Custom Web Design</p>
            <p>
              I offer tailored web design services that align with your brand 
              and business goals. I create responsive, modern, and visually 
              striking websites for great user experiences.
            </p>

            <p className="highlight">UI/UX Design</p>
            <p>
              My user-centered approach ensures that your website isn’t just 
              beautiful, but also intuitive, easy to navigate, and engaging.
            </p>

            <p className="highlight">Responsive Design</p>
            <p>
              Every website is fully responsive, ensuring it looks and works 
              perfectly on desktops, tablets, and smartphones.
            </p>
          </div>

          {/* Web Development */}
          <div className="service-card">
            <h3>Web Development</h3>
            <p className="highlight">Front-End Development</p>
            <p>
              I build fast, responsive, and interactive front-end websites 
              using HTML, CSS, JavaScript, and React.js for top performance.
            </p>

            <p className="highlight">Back-End Development</p>
            <p>
              I provide robust server-side solutions with Node.js, Express.js, 
              and databases (MongoDB, MySQL). I build APIs and manage data 
              for seamless user experiences.
            </p>
          </div>
        </div>
      </section>
      <Common1/>
    </>
  );
};
export default Service;
