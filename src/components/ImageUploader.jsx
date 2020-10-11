import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
 
const ImageLoader = (props) => {
    
    const [pictures, setPictures] = useState([]);

    const onDrop = (picture) => {
        console.log(picture);
        setPictures([...pictures, picture]);
    };
    return (
        <ImageUploader
            {...props}
            withIcon={true}
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    );
};
 
export default ImageLoader;