import React from 'react'
import Inputs from './pages/Inputs'
import Gallery from './pages/Gallery'
import './imageGallery.css'

export default function Mountain() {
  return (
    <div id='app-container'>
        <div>
            <h1 id='heading'>SnapShot</h1>
        </div>
      <Inputs />
      <h3 id='content-heading'>Mountain Pictures</h3>
      <Gallery />
    </div>
  )
}