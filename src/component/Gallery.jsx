// import { PropTypes } from "prop-types";
import { lazy, useState, useRef } from "react";
import "../css/component/gallery.css";
const ImgCreator = lazy(() => import("../api/ImgCreator"));
const TextArea = lazy(() => import("../component/TextArea"));

const Gallery = () => {
  const [img, setImg] = useState([]);
  const Gallery = useRef([]);
  return (
    <>
      <div className="gallery-container">
        <div className="gallery" ref={Gallery}>
          {img.map((e, i) => (
            <ImgCreator prompt={e} key={i} />
          ))}
        </div>
      </div>

      <TextArea setImg={setImg} Gallery={Gallery} />
    </>
  );
};

export default Gallery;
