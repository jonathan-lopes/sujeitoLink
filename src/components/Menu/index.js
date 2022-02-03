import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://github.com/jonathan-lopes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub size={24} color="#fff" />
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/jonathan-lopess/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin size={24} color="#fff" />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
