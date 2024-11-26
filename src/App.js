import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Header from './components/Header/Header'
import Home from './pages/Home page/Home'
import Detail from './pages/Listing Detail/Detail'
import Createlisting from './pages/create-listing/Createlisting'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/detail' element={<Detail/>}/>
        <Route exact path='create' element={<Createlisting/>}/>
      </Routes>
    </Router>
   
    
    
    

    </>
  )
}

export default App