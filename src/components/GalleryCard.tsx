import React, { useState } from "react";
// hovering over gallery card should reveal additional information
interface GalleryCardProps {
  thumbnail: string;
  info: {
    title: string;
    timestamp: string;
    author: string;
    filmStock: string;
  };
}

function GalleryCard({ thumbnail, info }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  function onFavoriteClick() {
    setIsFavorited(!isFavorited);
    console.log("Favorite clicked for:", info.title);
  }

  return (
    <div
      className="gallery-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gallery-card-image-container">
        <img
          src={thumbnail}
          alt={info.title}
          className={`gallery-card-thumbnail ${imageLoaded ? "loaded" : ""}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {}
        <div className={`gallery-card-overlay ${isHovered ? "show" : ""}`}>
          <button
            className={`favorite-btn ${isFavorited ? "favorited" : ""}`}
            onClick={onFavoriteClick}
            aria-label={`${isFavorited ? "Remove from" : "Add to"} favorites`}
          >
            <i className={`bi ${isFavorited ? "bi-star-fill" : "bi-star"}`}></i>
          </button>

          {}
          <div className="gallery-card-info">
            <h3 className="card-title">{info.title}</h3>
            <div className="card-details">
              <p className="card-date">
                <i className="bi bi-calendar3"></i>
                {info.timestamp}
              </p>
              <p className="card-author">
                <i className="bi bi-person"> </i>
                {info.author}
              </p>
              <p className="card-film-stock">
                <i className="bi bi-film"></i>
                {info.filmStock}
              </p>
            </div>
          </div>
        </div>
        {}
        {!imageLoaded && (
          <div className="image-placeholder">
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryCard;
