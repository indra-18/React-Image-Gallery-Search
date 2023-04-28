import React, { useContext } from 'react'
import { LoadRandomImages } from '../http-services/flickrApi'
import '../imageGallery.css'
import { ImageContext } from '../contexts/api-context'
export default function Gallery() {
  const data = LoadRandomImages()
  const { searchedImages, keyWord } = useContext(ImageContext)
  return (
    <div>
      <div id='gallery'>
        {
          keyWord ?
          searchedImages.map(image => (
            <div id='img-card' key={image.id}>
              <img src={image.urls.thumb} />
            </div>
          )) :
          data.map(image => (
            <div id='img-card' key={image.id}>
              <img src={image.urls.thumb} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
