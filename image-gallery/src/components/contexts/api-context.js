import React, { createContext, useState } from "react";
import { SearchByKeyword } from "../http-services/unsplashApi";

const ImageContext = createContext();

function ImageContextProvider({children}) {
    const [keyWord, setKeyWord] = useState('');
    const imageArray = SearchByKeyword(keyWord)
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