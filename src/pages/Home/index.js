import { useState } from "react";
import { FiLink } from "react-icons/fi";
import LinkItem from "../../components/LinkItem";
import Menu from "../../components/Menu";
import api from "../../services/api";
import "./styles.css";

function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      setLink("");
    } catch (error) {
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
  }

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
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu />
      {showModal && <LinkItem setShowModal={setShowModal} data={data} />}
    </div>
  );
}

export default Home;
