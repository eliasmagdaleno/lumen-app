import React from "react";
// hovering over gallery card should reveal additional information
function GalleryCard({ thumbnail, info }) {

    function onFavoriteClick() {
        console.log("Favorite clicked for:", info.title);
    }

  return (
    <div className="gallery-card">
      <img
        src={thumbnail}
        alt={info.title}
        className="gallery-card-thumbnail"
      />
      <div className="gallery-card-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
            <i className="fa fa-heart"></i>
        </button>
      </div>
      <div className="gallery-card-info">
        <h3>{info.title}</h3>
        <p>{info.timestamp}</p>
        <p>By: {info.author}</p>
        <p>Film Stock: {info.filmStock}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
