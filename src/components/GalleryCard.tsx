import React from "react";
// hovering over gallery card should reveal additional information
function GalleryCard({ thumbnail, info }) {
  function onFavoriteClick() {
    console.log("Favorite clicked for:", info.title);
  }

  return (
    <div className="gallery-card card">
      <img
        src={thumbnail}
        alt={info.title}
        className="gallery-card-thumbnail img-thumbnail w-100"
      />
      <div className="gallery-card-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          <i className="bi bi-star"></i>
        </button>
      </div>
      {/* <div className="gallery-card-info card-body">
        <h3>{info.title}</h3>
        <p>{info.timestamp}</p>
        <p>By: {info.author}</p>
        <p>
          <img
            src="/src/assets/icons/noun-35mm-film-765569.svg"
            alt="Film Stock Icon"
            className="icon"
          />
          Film Stock: {info.filmStock}
        </p>
      </div> */}
    </div>
  );
}

export default GalleryCard;
