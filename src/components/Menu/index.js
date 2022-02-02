import { BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        href="https:youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsYoutube size={24} color="#fff" />
      </a>
      <a
        className="social"
        href="https:instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram size={24} color="#fff" />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
