import "../css/utils/nevigationbar.css";
import { PropTypes } from "prop-types";
import { Back_button, Menu_btn, Cross_btn } from "../api/ImgHandeler";
import { device } from "../api/DeviceFinder";

const currDevice = device(navigator);
let NavClass = "nevigation";
if (currDevice) {
  NavClass += " mobile";
}

const NevigationBar = ({ visible, setMenuVisibility }) => {
  return (
    <div className={NavClass}>
      <div
        className="back"
        onClick={() => {
          setMenuVisibility(true);
        }}
      >
        <Back_button Class="back" />
      </div>
      {!visible && (
        <div
          className="menuIcon"
          onClick={() => {
            setMenuVisibility(true);
          }}
        >
          <Menu_btn />
        </div>
      )}
    </div>
  );
};
NevigationBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  setMenuVisibility: PropTypes.func.isRequired,
};

export function Menu({ setMenuVisibility }) {
  return (
    <>
      <div className="menu_black"></div>
      <div className="menu">
        <div
          className="cross"
          onClick={() => {
            document
              .getElementsByClassName("menu")[0]
              .classList.toggle("close");
            document
              .getElementsByClassName("menu_black")[0]
              .classList.toggle("close");
            setTimeout(() => setMenuVisibility(false), 380);
          }}
        >
          <Cross_btn />
        </div>
        <ul className="options">
          <li>History</li>
          <li>SavedImage</li>
        </ul>
      </div>
    </>
  );
}

Menu.propTypes = {
  setMenuVisibility: PropTypes.func.isRequired,
};
export default NevigationBar;
