import React, { createContext, useContext, useState } from "react";
import { LoadRandomImages, SearchByKeyword } from "../http-services/flickrApi";

const ImageContext = createContext();

function ImageContextProvider({children}) {
    const [keyWord, setKeyWord] = useState('');
    const imageArray = SearchByKeyword(keyWord)
    console.log(keyWord)
    console.log(imageArray)
    return <ImageContext.Provider value={{
        keyWord: keyWord,
        searchedImages: imageArray,
        searchMethod: (str) => {
            setKeyWord(str)
        }
    }}>
        {children}
    </ImageContext.Provider>
}

export{
    ImageContext,
    ImageContextProvider
}