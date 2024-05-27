import React from 'react'
import {BrowserRouter as Routers,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from "./Home"
import About from './About'


const App = () => {
  return (
    <Routers>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/About' element={<About/>} />
            </Route>
        </Routes>
    </Routers>   
  )
}
