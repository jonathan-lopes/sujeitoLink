import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";

function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://github.com/jonathan-lopes
        </button>

        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://plataforma.cubos.academy/home
        </button>

        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  );
}

export default Links;
