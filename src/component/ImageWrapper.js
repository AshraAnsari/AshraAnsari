import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";

export default function ImageWrapper() {
  const [imageData, setImageData] = useState([]);

  useEffect(async () => {
    const imageDataList = await axios.get(
      "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
    );
    setImageData(imageDataList.data);
  }, []);

  return (
    <div className="gallery">
      {imageData.map((data,index) => {
        return <ImageComponent data={data} key={index} />;
      })}
    </div>
  );
}
