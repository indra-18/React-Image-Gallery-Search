import React, { useContext, useState } from 'react'
import '../imageGallery.css'
import { ImageContext } from '../contexts/api-context'
import { Link } from 'react-router-dom'
export default function Inputs() {
  const [searchItem,setSearchItem] = useState('')
  const { searchMethod,  } = useContext(ImageContext)


  return (
    <div id='inputs-container'>
      <div id='search-container'>
        <input 
        id='search-box' 
        type='search' 
        name='search' 
        placeholder='Search...'
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchMethod(searchItem)
          }
        }} 
        onChange={(e) => {
          setSearchItem(e.target.value)
        }}
        value={searchItem}
        />
        <button
        onClick={() => {
          searchMethod(searchItem)
        }}
        >search</button>
      </div>
      <div id='buttons'>
        <Link to='/mountain'>
          <button
                  onClick={() => {
                    searchMethod('Mountain')
                  }}
          >Mountain</button>
        </Link>
        <Link to='/beaches'>
          <button
                  onClick={() => {
                    searchMethod('Beaches')
                  }}
          >Beaches</button>
        </Link>
        <Link to='/birds'>
          <button
                  onClick={() => {
                    searchMethod('Birds')
                  }}
          >Birds</button>
        </Link>
        <Link to='/food'>
          <button
                  onClick={() => {
                    searchMethod('Food')
                  }}
          >Food</button>
        </Link>
      </div>
    </div>
  )
}
