import Common from "./common";

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
      Hi, I'm Hassan, a passionate web developer with a love for creating visually appealing and functional websites. I specialize in front-end development using modern technologies such as React, HTML, CSS, and JavaScript. I enjoy solving problems and turning ideas into real, interactive web applications.
    </p>

    <p className="p1">
      My goal is to continually improve and learn new skills, keeping up with the latest trends in web development. I believe in clean, efficient code and strive to deliver high-quality, user-friendly web experiences.
    </p>
  </div>
</div>


      <footer>
        <div className="container">
          <p>&copy; 2024 Hassan's Portfolio | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
export default About;
