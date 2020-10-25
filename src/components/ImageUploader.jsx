import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
 
const ImageLoader = (props) => {

    const {setPictures} = props

    return (
        <ImageUploader
            {...props}
            withIcon={true}
            buttonText='Choose images'
            onChange={(e)=>setPictures(e)}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    );
};
 
export default ImageLoader;