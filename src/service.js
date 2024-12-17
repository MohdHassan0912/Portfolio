import Common from "./common";
import Common1 from "./common1";

const Service = () => {
  return (
    <>
      <Common />
      <div className="d1">
        <h2 className="text-success">Service</h2>
      </div>
      <div className="n1">
        <h4>Web Design Services</h4>
        <p className="h5 ps-4">Custom Web Design</p>
        <li className="ps-5">
          I offer tailored web design services that align with your brand and
          business goals. I specialize in creating responsive, modern, and
          visually striking websites that provide great user experiences across
          devices.
        </li>

      <p className="h5 ps-5">UI/UX Design</p>
      <li className="ps-5">
        My user-centered approach ensures that your website isn’t just
        beautiful, but also intuitive and easy to navigate. I focus on creating
        seamless interfaces and designing user-friendly experiences that lead to
        better engagement and conversions.
      </li>
      <p className="h5 ps-5">Responsive Web Design</p>
      <li className="ps-5">
        Every website I design is fully responsive, ensuring it looks great and
        functions well on all devices, from desktops to tablets and smartphones.
      </li>
      <h4 className="ps-4">Web Development Services</h4>
      <p className="ps-5 h5">Front-End Web Development</p>
      <li className="ps-5">
        I build fast, responsive, and interactive front-end websites using the
        latest technologies like HTML, CSS, JavaScript, and React.js. I ensure
        that your website looks great and performs well on all devices.
      </li>
      <p className="ps-5 h5">Back-End Web Development</p>
      <li className="ps-5">
        I offer server-side development with Node.js, Express.js, and databases
        like MongoDB or MySQL. I can build custom web applications, APIs, and
        manage data storage for seamless user experiences.
      </li>
      </div>
      <Common1/>
    </>
  );
};
export default Service;
