import { Link } from "react-router-dom"
import './style.css'

function Erro() {

    return (

        <div className="container">

            <h1>404</h1>

            <h2>Ops! Página não encontrada...</h2>

            <Link to="/" className="voltar-home">Voltar à página inicial</Link>

        </div>

    )

}

export default Erro