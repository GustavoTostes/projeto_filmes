import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './style.css'
import { toast } from 'react-toastify'

function Filme() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setDadosFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const [filmeSalvo, setFilmeSalvo] = useState(false)
    
    const verificarFilme = useCallback(() => {

        setFilmeSalvo(false)

        let listaFilmes = JSON.parse(localStorage.getItem('projetoFilmes')) || []
    
        for (let i = 0; i < listaFilmes.length; i++) {

            if (listaFilmes[i].id === parseInt(id)) {

                setFilmeSalvo(true)
                
                break

            }

        }

    }, [id])

    useEffect(() => {

        async function getFilme() {

            await api.get(`movie/${id}`, {

                params: {

                    // Acesse https://www.themoviedb.org para obter sua api_key
                    
                    api_key: '',
                    language: 'pt-BR',

                }

            }).then((response) => {

                setDadosFilme(response.data)
                setLoading(false)

            }).catch(() => {

                console.log('erro')
                navigate('/', { replace: true })

            })

        }

        getFilme()
        verificarFilme()

    }, [id, navigate, verificarFilme])

    function adicionarFilmeFavoritos() {

        let listaFilmes = JSON.parse(localStorage.getItem('projetoFilmes')) || []

        listaFilmes.push(filme)

        localStorage.setItem('projetoFilmes', JSON.stringify(listaFilmes))
        
        toast.success('Filme adicionado aos favoritos!', {

            hideProgressBar: true,
            theme: 'colored'

        })

        verificarFilme()

    }

    function removerFilmeFavoritos() {

        let listaFilmes = JSON.parse(localStorage.getItem('projetoFilmes')) || []

        let indice = null

        for (let i = 0; i < listaFilmes.length; i++) {

            if (listaFilmes[i].id === parseInt(id)) {

                indice = i
                
                break

            }

        }

        listaFilmes.splice(indice, 1)

        localStorage.removeItem('projetoFilmes')

        localStorage.setItem('projetoFilmes', JSON.stringify(listaFilmes))

        toast.success('Filme removido dos favoritos!', {

            hideProgressBar: true,
            theme: 'colored'

        })

        verificarFilme()

    }

    if (loading) {

        return(

            <h2>Carregando dados do filme...</h2>

        )

    }

    return (

        <div className='container'>

            <h2>{filme.title}</h2>

            <img 
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} 
            alt={`Imagem do filme ${filme.title}`}>
            </img>

            <h3>Sinopse</h3>

            <span>{filme.overview}</span>
            <h3>Avaliação: {filme.vote_average}/10</h3>

            <div className='container-buttons'>

                {

                    filmeSalvo 

                    ? <button className='add-favoritos' onClick={removerFilmeFavoritos}>Remover dos favoritos</button>
                    : <button className='add-favoritos' onClick={adicionarFilmeFavoritos}>Adicionar aos favoritos</button>

                }

                <button className='trailer' onClick={() => window.open(`https://www.youtube.com/results?search_query=${filme.title} trailer`)}>Trailer</button>

            </div>

        </div>

    )

}

export default Filme