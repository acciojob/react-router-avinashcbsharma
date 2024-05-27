import React from 'react'
import {BrowserRouter as Routers,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from "./Home"
import About from './About'


const App = () => {
  return (
    <Routers>
        <Routes>
           <Layout/>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={<About/>} />           
        </Routes>
    </Routers>   
  )
}
