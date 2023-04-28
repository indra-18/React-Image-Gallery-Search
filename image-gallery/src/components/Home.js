import React, { useContext } from 'react'
import Inputs from './pages/Inputs'
import Gallery from './pages/Gallery'
import './imageGallery.css'
import { ImageContext } from './contexts/api-context'


export default function Home() {
  const { keyWord } = useContext(ImageContext)
  return (
    <div id='app-container'>
        <div>
            <h1 id='heading'>SnapShot</h1>
        </div>
        <Inputs />
      <h3 id='content-heading'>{keyWord} Pictures</h3>
      <Gallery />
    </div>
  )
}
