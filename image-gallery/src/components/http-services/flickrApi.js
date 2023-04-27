import axios from 'axios';
import { useEffect, useState } from 'react';
// key = c639a0e9c660256078ccd24c4dcd1204
// secret = 72f587f42922f169


// 2WhxTU-EOTsgEb3212OI-oATAc4Zsb81PaTdAzJSt_E
// vLPPHevL8Qr75McludjBL9q1EC7hmbk7JjwFkDNVZoM

const count = 1;
function LoadRandomImages() {
    const [images, setImages] = useState([])
    useEffect(() => {
        const API_BASE_URL = 'https://api.unsplash.com/photos/?client_id='
        const key = '2WhxTU-EOTsgEb3212OI-oATAc4Zsb81PaTdAzJSt_E'
        axios.get(`${API_BASE_URL}${key}`).then(res => setImages(res.data))
    },[count])
    return images
}

function SearchByKeyword(query) {
    const [searchedImages, setSearchedImages] = useState()
    // console.log(searchedImages)
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