import React, { useContext, useState } from 'react'
import '../imageGallery.css'
import { ImageContext } from '../contexts/api-context'

export default function Inputs() {
  const [searchItem,setSearchItem] = useState('')
  const { searchMethod } = useContext(ImageContext)


  return (
    <div id='inputs-container'>
      <div id='search-container'>
        <input 
        id='search-box' 
        type='search' 
        name='search' 
        placeholder='Search...' 
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
        <button
                onClick={() => {
                  searchMethod('mountain')
                }}
        >Mountain</button>
        <button
                onClick={() => {
                  searchMethod('beaches')
                }}
        >Beaches</button>
        <button
                onClick={() => {
                  searchMethod('birds')
                }}
        >Birds</button>
        <button
                onClick={() => {
                  searchMethod('food')
                }}
        >Food</button>
      </div>
    </div>
  )
}
