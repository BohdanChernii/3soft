import React, { useState } from 'react';
import ImageList from './ImageList';
import ImageUploading from 'react-images-uploading';
import '../index.scss';
const App = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList) => {
    setImages(imageList);
  };
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove }) => (
          <div className="upload__image-wrapper">
            <button className="btn" onClick={onImageUpload}>
              Click or Drop here
            </button>
            &nbsp;
            <ImageList imageList={imageList} onImageRemove={onImageRemove} />
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default App;
