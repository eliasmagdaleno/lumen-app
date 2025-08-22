import React from "react";
import GalleryCard from "../components/GalleryCard";

// Import images
import img01 from "../assets/images/img01.jpg";
import img02 from "../assets/images/img02.jpg";
import img03 from "../assets/images/img03.jpg";
import img04 from "../assets/images/img04.jpg";
import img05 from "../assets/images/img05.jpg";

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      thumbnail: img01,
      info: {
        title: "Sample Photo",
        timestamp: "2024-04-27",
        author: "John Doe",
        filmStock: "Kodak Portra 400",
      },
    },
    {
      id: 2,
      thumbnail: img02,
      info: {
        title: "Sunset Boulevard",
        timestamp: "2024-05-10",
        author: "Jane Smith",
        filmStock: "Fujifilm Superia X-TRA 400",
      },
    },
    {
      id: 3,
      thumbnail: img03,
      info: {
        title: "Mountain View",
        timestamp: "2024-06-15",
        author: "Alex Johnson",
        filmStock: "Ilford HP5 Plus",
      },
    },
    {
      id: 4,
      thumbnail: img04,
      info: {
        title: "City Lights",
        timestamp: "2024-07-01",
        author: "Maria Garcia",
        filmStock: "Kodak Ektar 100",
      },
    },
    {
      id: 5,
      thumbnail: img05,
      info: {
        title: "Forest Trail",
        timestamp: "2024-08-05",
        author: "Chris Lee",
        filmStock: "Agfa Vista Plus 200",
      },
    },
  ];

  return (
    <div className="gallery-container container-fluid">
      <div className="gallery-grid row">
        {galleryItems.map((item) => (
          <GalleryCard
            thumbnail={item.thumbnail}
            info={item.info}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
