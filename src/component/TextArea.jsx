import { useRef } from "react";
import "../css/component/textarea.css";
import addPrompt from "../api/Prompt";

const TextArea = ({ setImg, Gallery }) => {
  const textArea = useRef(null);
  const scrollAnim = () => {
    const height = Gallery.current.children[0].clientHeight;
    if (height * Gallery.current.children.length < Gallery.current.parentElement.clientHeight) {
      return;
    }
    
  };
  const handelImg = () => {
    addPrompt(textArea.current.value);
    // Here I add a timeout function to delay the update of the img loading since if it loaded quickly the react throws an error
    // This is a tmp fix untill we like Prompt.js to an api to update the history which add a delay to update the img
    setTimeout(() => setImg((n) => [...n, textArea.current.value]), 300);
    setTimeout(() => scrollAnim(), 500);
  };
  return (
    <div className="textarea-container">
      <div className="textarea">
        <textarea
          name="prompts"
          ref={textArea}
          placeholder="Enter Your Prompts"
        ></textarea>
        <div className="submit-btn">
          <input type="button" value=">" onClick={handelImg} />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
