import Common from "./common";
import Common1 from "./common1";
import Commmon1 from "./common1";

const Skill = () => {
  return (
    <>
      <Common />

     <section className="skills-section">
        <div className="skills-header">
          <h2>My <span>Skills</span></h2>
          <p>Technologies & tools I work with to build modern web applications</p>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-card">
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML <div className="progress"><span style={{ width: "95%" }}></span></div></li>
              <li>CSS <div className="progress"><span style={{ width: "90%" }}></span></div></li>
              <li>JavaScript <div className="progress"><span style={{ width: "85%" }}></span></div></li>
              <li>React.js <div className="progress"><span style={{ width: "80%" }}></span></div></li>
              <li>Bootstrap <div className="progress"><span style={{ width: "85%" }}></span></div></li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Back-End Development</h3>
            <ul>
              <li>Node.js <div className="progress"><span style={{ width: "80%" }}></span></div></li>
              <li>Express.js <div className="progress"><span style={{ width: "75%" }}></span></div></li>
              <li>MongoDB <div className="progress"><span style={{ width: "70%" }}></span></div></li>
              <li>MySQL / PostgreSQL <div className="progress"><span style={{ width: "65%" }}></span></div></li>
              <li>RESTful APIs <div className="progress"><span style={{ width: "80%" }}></span></div></li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3>Tools & Libraries</h3>
            <ul>
              <li>VS Code <div className="progress"><span style={{ width: "95%" }}></span></div></li>
              <li>Postman <div className="progress"><span style={{ width: "90%" }}></span></div></li>
              <li>Git & GitHub <div className="progress"><span style={{ width: "85%" }}></span></div></li>
            </ul>
          </div>
        </div>
      </section>
      <Common1/>
    </>
  );
}
export default Skill;
