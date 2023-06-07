import axios from 'axios';
import { useEffect, useState } from 'react';

// const count = 1;
function LoadRandomImages() {
    const [images, setImages] = useState([])
    useEffect(() => {
        const API_BASE_URL = 'https://api.unsplash.com/photos/?client_id='
        const key = '2WhxTU-EOTsgEb3212OI-oATAc4Zsb81PaTdAzJSt_E'
        axios.get(`${API_BASE_URL}${key}`).then(res => setImages(res.data))
    },[])
    return images
}

function SearchByKeyword(query) {
    const [searchedImages, setSearchedImages] = useState()
    useEffect(() => {
        const API_BASE_URL = 'https://api.unsplash.com/search/photos/?query='+query+'&client_id='
        const key = '2WhxTU-EOTsgEb3212OI-oATAc4Zsb81PaTdAzJSt_E'
        axios.get(`${API_BASE_URL}${key}`).then(res => setSearchedImages(res.data.results))
    },[query])
    return searchedImages
}

export {
    LoadRandomImages,
    SearchByKeyword
}