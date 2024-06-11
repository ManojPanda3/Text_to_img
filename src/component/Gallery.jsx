// import { PropTypes } from "prop-types";
import { lazy } from "react";
import "../css/component/gallery.css";
const ImgCreator = lazy(() => import("../api/ImgCreator"));

const Gallery = () => {
  return (
    <div className="gallery">
      <ImgCreator prompt="Ice" />
      <ImgCreator prompt="Fire" />
      <ImgCreator prompt="Earth" />
      <ImgCreator prompt="Wood" />
      <ImgCreator prompt="Iron" />
    </div>
  );
};

export default Gallery;
