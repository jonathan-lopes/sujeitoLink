import { FiClipboard, FiX } from "react-icons/fi";
import "./styles.css";

function LinkItem({ setShowModal, data }) {
  async function copyLink() {
    await navigator.clipboard.writeText(data.link);
    alert("URL Copiada com sucesso!");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={() => setShowModal(false)}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>{data.long_url}</span>

      <button className="modal-link" onClick={copyLink}>
        {data.link}
        <FiClipboard />
      </button>
    </div>
  );
}

export default LinkItem;
