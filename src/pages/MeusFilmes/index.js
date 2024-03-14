import { useEffect, useState } from 'react'
import CardFilme from '../../components/CardFilme'
import { Link } from 'react-router-dom'
import './style.css'

function MeusFilmes() {

    const [meusFilmes, setMeusFilmes] = useState([])

    useEffect(() => {

        const listaMeusFilmes = JSON.parse(localStorage.getItem('projetoFilmes'))
        
        setMeusFilmes(listaMeusFilmes)

    }, [])

    if (meusFilmes.length === 0) {

        return (

            <div className="container">

                <h2>Parece que você ainda não tem filmes favoritos...</h2>

                <Link to="/" className="add-filmes">Adicionar filmes à minha lista</Link>

            </div>

        )

    }

    return (

        <div className='container-filmes'>

            {

                meusFilmes.map((filme) => {

                    return (

                        <div key={filme.id}>

                            <CardFilme 
                            id={filme.id}
                            titulo={filme.title}
                            urlImagem={filme.poster_path}/>

                        </div>

                    )

                })

            }

        </div>

    )

}

export default MeusFilmes