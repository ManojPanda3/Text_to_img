import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../utils/Loading"; // no need for lazy loading here
import "../css/api/ImgCreator.css";

const ImgCreator = ({ prompt }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!prompt) return; // handle falsy prompt values

    const img = new Image();
    const imgLoader = () => {
      setLoading(false);
    };
    img.addEventListener("load", imgLoader);
    img.src =
      "http://image.pollinations.ai/prompt/" +
      prompt +
      "?height=500&width=500&nologo=true";
    return () => {
      img.removeEventListener("load", imgLoader);
    };
  }, [prompt]);

  return (
    <div className="img">
      {isLoading ? (
        <Loading />
      ) : (
        <img
          src={
            "http://image.pollinations.ai/prompt/" +
            prompt +
            "?height=500&width=500&nologo=true"
          }
        />
      )}
    </div>
  );
};

ImgCreator.propTypes = {
  prompt: PropTypes.string.isRequired,
};

export default ImgCreator;
