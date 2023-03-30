import React from 'react'
import { useState } from "react";
import "./style.css";

const image = [
  "https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/06/1920x1080-Wallpaper-HD-Images.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC1XcnZUpo3jQI6sXCp8C-PF9tgXlc9uIOA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_i90twMQ2fNiQANbagJ3N-IfRnzdtuC5AqQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes_javUl_kC4ILR74cppeSaPafZ591sEGzw&usqp=CAU",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === image.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? image.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Gallery</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {image.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src = {image} alt = "image"/>
              </div>
            )
        )}
      </div>
    </div>
  );
}
