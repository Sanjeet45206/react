import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css";

const FigureList = () => {
  const [images, setImages] = useState([
    { src: "https://picsum.photos/400/300?random=1", caption: "Image 1" },
    { src: "https://picsum.photos/400/300?random=2", caption: "Image 2" },
    { src: "https://picsum.photos/400/300?random=3", caption: "Image 3" },
  ]);

  const addImage = () => {
    const newImage = {
      src: `https://picsum.photos/400/300?random=${images.length + 1}`,
      caption: `Image ${images.length + 1}`,
    };
    setImages([...images, newImage]);   // add to the array
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));   // remove one
  };

  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <button onClick={addImage}>Add Image</button>

      <div className="gallery">
        {images.map((image, index) => (
          <BasicFigure
            key={index}
            src={image.src}
            caption={image.caption}
            onRemove={() => removeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
