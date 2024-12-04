import Common from "./common";

const Skill = () => {
  return (
    <>
      <Common />
      {/* <div className="d1">
        <h2 className="text-primary">SKILL</h2>
      </div>
      <div className="n1">
        <ul>
          <li>HTML5, CSS, JavaScript</li>
          <li>React, Redux</li>
          <li>Node.js, Express.js</li>
          <li>Git, GitHub</li>
          <li>Responsive Web Design</li>
          <li>Mongos DB</li>
        </ul>
      </div> */}

      <div className="d1">
  <h2 className="text-success">SKILL</h2>
</div>

<div className="n1">
  <ul>
    <li>HTML, CSS, JavaScript</li>
    <li>React, Redux</li>
    <li>Node.js, Express.js</li>
    <li>Git, GitHub</li>
    <li>Responsive Web Design</li>
    <li>MongoDB</li>
  </ul>
</div>


      <footer>
        <div className="container">
          <p>&copy; 2024 Hassan's Portfolio | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
export default Skill;
