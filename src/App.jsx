import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import '../src/style/index.scss'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

import NotFound from './pages/NotFound'
import {AnimatePresence} from "framer-motion"
import Apropos from './pages/Apropos'

function App() {

  return (
    <div className="App">
<BrowserRouter>
<AnimatePresence> 
    <Routes>    
       <Route path="/" element={ <Home/> } />
       <Route path="/a-propos" element={ <Apropos/> } />
        <Route path="/projects" element={ <Projects/>} />
        <Route/>
       <Route path="/contact" element={ <Contact/> } />
       <Route path="*" element={ <NotFound /> } />
    </Routes>  
    </AnimatePresence>
    
</BrowserRouter>             

    </div>
  )
}

export default App
