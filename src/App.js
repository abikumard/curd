import React from 'react'
import "./App.css"
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {

  return (
   
      <div className='app'>


      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/create' element={<Create />} />
      <Route path='/read' element={<Read />} />
      <Route path='/update' element={<Update />} />
      </Routes>
      </BrowserRouter>

      </div>
    
   
  )
}

export default App
