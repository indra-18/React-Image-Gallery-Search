import React, { useContext } from "react";
import { LoadRandomImages } from "../http-services/unsplashApi";
import "../imageGallery.css";
import { ImageContext } from "../contexts/api-context";
export default function Gallery() {
  const data = LoadRandomImages();
  const { searchedImages, keyWord } = useContext(ImageContext);
  return (
    <div>
      <div id="gallery">
        {keyWord
          ? searchedImages.map((image) => (
              <div id="img-card">
                <a href={image.urls.small} key={image.id}>
                  <img src={image.urls.thumb} alt={image.alt_description} />
                </a>
              </div>
            ))
          : data.map((image) => (
              <div id="img-card" key={image.id}>
                <a href={image.urls.small} key={image.id}>
                  <img src={image.urls.thumb} alt={image.alt_description} />
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
