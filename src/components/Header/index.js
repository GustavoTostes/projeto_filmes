import './style.css'
import { Link } from 'react-router-dom'

function Header() {

    return (

        <header className='header'>

            <Link to="/" className='logo'>&lt;projetoFilmes/&gt;</Link>
            <Link to="/meus-filmes" className='meus-filmes'>Meus filmes</Link>

        </header>

    )

}

export default Header