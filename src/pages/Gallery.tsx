import React from "react";
import GalleryCard from "../components/GalleryCard";

function Gallery() {
  return (
    <div className="gallery-container container-fluid">
      <div className="gallery-grid row">
        <GalleryCard
          thumbnail="path/to/thumbnail.jpg"
          info={{
            title: "Sample Photo",
            timestamp: "2024-04-27",
            author: "John Doe",
            filmStock: "Kodak Portra 400",
          }}
        />
      </div>
    </div>
  );
}

export default Gallery;
