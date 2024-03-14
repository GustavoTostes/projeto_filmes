import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Filme from './pages/Filme'
import MeusFilmes from './pages/MeusFilmes'
import Erro from './pages/Erro'

function Rotas() {

    return (

        <BrowserRouter>

            <Header/>
        
            <Routes>

                <Route path='/' element={ <Home/> }/>
                <Route path='/filme/:id' element={ <Filme/> }/>
                <Route path='/meus-filmes' element={ <MeusFilmes/> }/>

                <Route path='*' element={ <Erro/> }/>

            </Routes>
        
        </BrowserRouter>

    )

}

export default Rotas