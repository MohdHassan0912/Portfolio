import Common from "./common";
import Commmon1 from "./common1";

const About = () => {
  return (
    <>
      <Common />
      {/* <div className=" d1">
        <h2 className="text-success">About Me</h2>
      </div>
      <div className="d2">
        <div className="txt">
          <p className="p1">
            Hi, I'm Hassan, a passionate web developer with a love for creating
            visually appealing and functional websites. I specialize in
            front-end development using modern technologies such as React, HTML,
            CSS, and JavaScript. I enjoy solving problems and turning ideas into
            real, interactive web applications.
          </p>

          <p className="p1">
            My goal is to continually improve and learn new skills, keeping up
            with the latest trends in web development. I believe in clean,
            efficient code and strive to deliver high-quality, user-friendly web
            experiences.
          </p>
        </div>
      </div> */}

      <div className="d1">
        <h2 className="text-success">About Me</h2>
      </div>

      <div className="d2">
        <div className="txt">
          <p className="p1">
            Hi, I'm mohd Hassan, a passionate Web Developer who loves creating
            beautiful, responsive, and user-friendly websites. I specialize in
            front-end development, working with HTML, CSS, and JavaScript to
            bring designs to life. I’m also experienced in back-end technologies
            like Node.js and Express, as well as databases like MySQL and
            MongoDB.
          </p>
          <p className="p1 ">My technical skill set includes:</p>

          <li>
            HTML5, CSS3, and JavaScript for building and styling dynamic
            websites.
          </li>
          <li>React.js for creating interactive user interfaces.</li>
          <li>Node.js and Express.js for back-end development.</li>
          <li>Git for version control and collaboration.</li>
          <br />
          <p className="p1">
            I have worked with clients ranging from small startups to large
            enterprises, helping them build responsive websites and web
            applications. In my previous role at [Zn Infotech], I led a team of
            developers to design and implement an e-commerce platform that
            increased sales by 20%. I’m passionate about building products that
            solve real-world problems and create seamless experiences for users.
            My journey in web development started when I built my first website
            as a teenager, and I’ve been hooked ever since. Every project is a
            new opportunity to learn and improve my craft. When you work with
            me, you can expect high-quality code, attention to detail, and
            timely delivery. I am always open to collaboration and clear
            communication throughout the development process. Feel free to check
            out my work or contact me if you’d like to discuss how we can create
            something amazing together!
          </p>
        </div>
      </div>

      <Commmon1/>
    </>
  );
};
export default About;
