import { Link } from 'react-router-dom'
import './style.css'

function CardFilme(props) {

    return (

        <div key={props.id} className="card">

            <span>{props.titulo}</span>

            <img 
            src={`https://image.tmdb.org/t/p/original/${props.urlImagem}`} 
            alt={`Imagem do filme ${props.titulo}`}>      
            </img>
            
            <Link className='mais-detalhes' to={`/filme/${props.id}`}>Mais detalhes</Link>

        </div>

    )

}

export default CardFilme