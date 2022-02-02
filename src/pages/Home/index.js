import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import "./styles.css";

function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input type="text" placeholder="Cole seu link aqui..." />
        </div>
        <button>Encurtar Link</button>
      </div>

      <Menu />
    </div>
  );
}

export default Home;
