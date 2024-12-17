import Common from "./common";
import Common1 from "./common1";
import Commmon1 from "./common1";

const Skill = () => {
  return (
    <>
      <Common />

      <div className="d1">
        <h2 className="text-success">SKILL</h2>
      </div>

      <div className="n1">
        <h5>Front-End Development:</h5>
        <li>HTML: Building structured, semantic web content.</li>
        <li>
          CSS: Styling layouts and designing responsive, mobile-first websites.
        </li>
        <li>
          JavaScript: Creating interactive features (e.g., form validation,
          dynamic content loading).
        </li>
        <li>
          React.js: Developing modern, single-page applications with reusable
          components.
        </li>
        <li>Bootstrap: Rapidly prototyping responsive web designs.</li>
        <h5>Back-End Development:</h5>
        <li>Node.js: Server-side JavaScript programming.</li>
        <li>Express.js: Developing web applications and APIs in Node.js.</li>
        <li>MongoDB: NoSQL database management for data storage.</li>
        <li>
          MySQL/PostgreSQL: Relational database management for structured data.
        </li>
        <li>RESTful APIs: Designing and consuming RESTful web services.</li>
        <h5>Tools & Libraries:</h5>
        <li>VS Code: Code editor with extensions for efficient development.</li>
        <li>Postman: API testing and development.</li>
      </div>
      <Common1/>
    </>
  );
}
export default Skill;
