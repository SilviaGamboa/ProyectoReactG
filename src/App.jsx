import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Vale from './page/Vale'
import Yos from './page/Yos'
import Sil from './page/Sil'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Vale" element={<Vale/>}/>
      <Route path="/Yos" element={<Yos/>}/>
      <Route path="/Sil" element={<Sil/>}/>
    </Routes>
  )
}

export default App
