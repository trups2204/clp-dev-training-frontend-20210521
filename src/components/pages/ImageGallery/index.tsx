import React, { useState, useEffect, useCallback } from "react";
import { Loader } from "../../common/Loader";

import {GalleryContainer,  GalleryItem, GalleryCaption, GalleryImage} from '../../common/styles';


export default function ImageGallery() {
  const [photosData, setImagePhotosData ] = useState([]);
  const [searchTag, setSearchTag] = React.useState("");
  const [loaded, hasLoaded] = useState(false);
  const [error, hasError] = useState(false);


  const handleChange = event => {
    console.warn('handle change is called');
    setSearchTag(event.target.value);
  };
  
  const fetchData = useCallback((tag) => {
          fetch("http://localhost:5000/api/images?tag="+ tag)
          .then((res) => res.json())
          .then(
            (response) => {
              hasLoaded(true);
              hasError(false);
              setImagePhotosData(response);
            },
            (error) => {
              hasError(true);
              console.log(error);
            }
          );
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {

    fetchData('flowers')}, 1100);

    return () => clearTimeout(timer);
  }, [fetchData])
  

  return (
   
      <>
                <a href="/">Back to Home</a>

     {error && <p role="alert">Oops, failed to fetch!</p>}

      {!error && loaded ? (
        <div>
         <h2>Responsive Image Gallery</h2>
         <h4>Resize the browser window to see the effect.</h4>
         <h4>Hover on the Image to see the title.</h4>
         <h4>Default Tag is flowers. Type below search tag to search for more images on flickr</h4>
         <input
           data-testid ="input-search"
           type="text"
           aria-label="search photos"
           placeholder="Search"
           value={searchTag}
           onChange={handleChange}
         />
         <button type='button'  data-testid ="btnSearch" aria-label="Click to Search" onClick={() => fetchData(searchTag)}>Click to Search</button>
        <GalleryContainer>
        {photosData.map((item) => (
          <GalleryItem data-testid="galleryItem" key={item.id} aria-labelledby={item.id}>
            <GalleryImage key={item.id} alt ={item.title} src={item.url_n} />

            <GalleryCaption id={item.id}>{item.title}
            </GalleryCaption>

          </GalleryItem>
        ))}
      </GalleryContainer></div>
      ) : (
        <Loader/>
      )}
     </>
 
  );
}
