import React from 'react'
import {BrowserRouter as Routers,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from "./Home"
import About from './About'


const App = () => {
  return (
    <Routers>
        <Layout/>
        <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
        </Routes>
    </Routers>   
  )
}

export default App
