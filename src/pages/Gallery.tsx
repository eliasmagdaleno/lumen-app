import React from "react";
import GalleryCard from "../components/GalleryCard";

// Import images
import img01 from "../assets/images/img01.jpg";
import img02 from "../assets/images/img02.jpg";
import img03 from "../assets/images/img03.jpg";
import img04 from "../assets/images/img04.jpg";
import img05 from "../assets/images/img05.jpg";
import img06 from "../assets/images/img06.jpg";
import img07 from "../assets/images/img07.jpg";
import img08 from "../assets/images/img08.jpg";
import img09 from "../assets/images/img09.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";

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
    {
      id: 6,
      thumbnail: img06,
      info: {
        title: "Harbor Mist",
        timestamp: "2024-10-21",
        author: "Nina Frost",
        filmStock: "Kodak Gold 200",
      },
    },
    {
      id: 7,
      thumbnail: img07,
      info: {
        title: "Autumn Leaves",
        timestamp: "2024-10-28",
        author: "Liam Carter",
        filmStock: "Fujifilm Pro 400H",
      },
    },
    {
      id: 8,
      thumbnail: img08,
      info: {
        title: "Urban Shadows",
        timestamp: "2024-11-04",
        author: "Sophie Turner",
        filmStock: "Ilford Delta 3200",
      },
    },
    {
      id: 9,
      thumbnail: img09,
      info: {
        title: "Golden Hour",
        timestamp: "2024-11-11",
        author: "Evan Brooks",
        filmStock: "Kodak Tri-X 400",
      },
    },
    {
      id: 10,
      thumbnail: img10,
      info: {
        title: "Street Vibes",
        timestamp: "2024-11-18",
        author: "Maya Singh",
        filmStock: "Fujifilm Velvia 50",
      },
    },
    {
      id: 11,
      thumbnail: img11,
      info: {
        title: "Retro Ride",
        timestamp: "2024-11-25",
        author: "Oscar Wilde",
        filmStock: "Kodak ColorPlus 200",
      },
    },
    {
      id: 12,
      thumbnail: img12,
      info: {
        title: "River Stones",
        timestamp: "2024-12-02",
        author: "Ella James",
        filmStock: "Fomapan 100",
      },
    },
    {
      id: 13,
      thumbnail: img13,
      info: {
        title: "Night Lights",
        timestamp: "2024-12-09",
        author: "Noah Reed",
        filmStock: "Cinestill 800T",
      },
    },
    {
      id: 14,
      thumbnail: img14,
      info: {
        title: "Quiet Park",
        timestamp: "2024-12-16",
        author: "Zoe Lane",
        filmStock: "Kodak Ultramax 400",
      },
    },
    {
      id: 15,
      thumbnail: img15,
      info: {
        title: "Country Path",
        timestamp: "2024-12-23",
        author: "Mason Cole",
        filmStock: "Fujifilm Neopan 100",
      },
    },
  ];

  return (
    <div className="gallery-container container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 ">
        {galleryItems.map((item) => (
          <div className="col m-0 d-block" key={item.id}>
            <GalleryCard thumbnail={item.thumbnail} info={item.info} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
