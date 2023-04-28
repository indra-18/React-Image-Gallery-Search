import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Mountain from '../components/Mountain'
import Beaches from '../components/Beaches'
import Birds from '../components/Birds'
import Food from '../components/Food'

export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mountain' element={<Mountain />} />
                <Route path='/beaches' element={<Beaches />} />
                <Route path='/birds' element={<Birds />} />
                <Route path='/food' element={<Food />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
