import { useState, lazy } from "react";
import "../css/component/textToImg.css";
import NevigationBar, { Menu } from "../utils/NevigationBar";
const Gallery = lazy(() => import("../component/Gallery"));

const TextToImg = () => {
  const [visible, setMenuVisibility] = useState(false);
  return (
    <div className="text-to-img">
      <NevigationBar visible={visible} setMenuVisibility={setMenuVisibility} />
      {visible && (
        <Menu visible={visible} setMenuVisibility={setMenuVisibility} />
      )}
      <Gallery />
    </div>
  );
};

export default TextToImg;
