import React from 'react'
import Home from './Page/Home'
import Basket from './Page/Basket/Basket'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './Page/Detail/Detail';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path="/detail/:productId" element={<Detail />} /> 
    </Routes>
   </Router>
  )
}

export default App
