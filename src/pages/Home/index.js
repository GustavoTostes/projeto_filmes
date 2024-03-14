import { useState, useEffect } from 'react'
import api from '../../services/api'
import CardFilme from '../../components/CardFilme'
import './style.css'

function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function getFilmes() {

            const response = await api.get('movie/now_playing', {

                params: {

                    // Acesse https://www.themoviedb.org para obter sua api_key
                    
                    api_key: '',
                    language: 'pt-BR',
                    page: 1

                }

            })

            setFilmes(response.data.results)
            setLoading(false)

        }

        getFilmes()

    }, [])

    if (loading) {

        return (

            <h2>Carregando filmes...</h2>

        )

    }

    return (

        <div className='container-filmes'>

            {

                filmes.map((filme) => {

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

export default Home