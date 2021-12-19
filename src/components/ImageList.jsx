import React, { useState } from 'react';
const ImageList = ({ imageList, onImageRemove }) => {
  localStorage.setItem('images', JSON.stringify(JSON.stringify(imageList)));
  let movies = JSON.parse(JSON.parse(localStorage.getItem('images')));
  console.log(movies);
  const [deleted, setDelete] = useState();
  const handleClick = (index) => {
    setDelete(index);
  };
  return (
    <div className="image">
      {imageList.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.data_url} alt="" width="100" />
          <p className={index === deleted ? 'deleted' : ''}>
            {image.file.name}
          </p>
          <div className="image-item__btn-wrapper">
            <button
              onClick={() => {
                setTimeout(() => {
                  onImageRemove(index);
                  setDelete(null);
                }, 500);

                handleClick(index);
              }}
            >
              Remove
            </button>
          </div>
          {console.log(image)}
        </div>
      ))}
    </div>
  );
};
export default ImageList;
