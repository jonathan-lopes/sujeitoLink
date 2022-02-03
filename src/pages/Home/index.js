import { useRef, useState } from "react";
import { FiLink } from "react-icons/fi";
import LinkItem from "../../components/LinkItem";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";
import "./styles.css";

function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const inputRef = useRef();

  async function handleShortLink() {
    if (!link) {
      setError(true);
      inputRef.current.placeholder = "Campo vazio...";
      inputRef.current.focus();
      return;
    }

    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      saveLink("@encurtaLink", response.data);
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
        <div className={`${error && "error"}`}>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
              setError(false);
              inputRef.current.placeholder = "Cole seu link aqui...";
            }}
            ref={inputRef}
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
