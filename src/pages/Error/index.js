import { Link } from "react-router-dom";
import "./styles.css";

function Error() {
  return (
    <div className="container-error">
      <img src="notfound.png" alt="Pagina nao encontrada" />
      <h1>Página não encontrada!</h1>
      <Link to="/">Voltar para home</Link>
    </div>
  );
}

export default Error;
