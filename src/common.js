import { Link } from "react-router-dom";

const Common = () => {
  const band = () => {
    document.getElementById("mm").classList.remove("sidekaro");
  };
  const kholo = () => {
    document.getElementById("mm").classList.add("sidekaro");
  };
  return (
    <>
      <div className="r1">
        <div className="c1">
          <h1>
            Port <span className="text-success">Folio</span>
          </h1>
        </div>
        <div className="c1 c2">
          <ul>
            <li>
              <Link to="/">
                <a href="" className="menu">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <a href="" className="menu">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link to="/Skill">
                <a href="" className="menu">
                  Skill
                </a>
              </Link>
            </li>
            <li>
            <Link to ="/Service">
              <a href="" className="menu">
                Service
              </a>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <a href="" className="menu">
                  Contant
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <i onClick={kholo} className="fa fa-bars"></i>
      </div>

      {/* menu design for mobile  */}

      <div id="mm" className="menu1">
        <div onClick={band} className="cross">
          &times;
        </div>
        <ul>
        <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/About">
            <li>About</li>
          </Link>
          <Link className="link" to="/Skill">
            <li>Skill</li>
          </Link>
          <Link className="link" to="/Contact">
            <li>Contact</li>
          </Link>
          <Link className="link" to="/service">
            <li>Service</li>
          </Link>
          
        </ul>
      </div>
    </>
  );
};
export default Common;
