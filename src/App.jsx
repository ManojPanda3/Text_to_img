import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./root.css";
const TextToImg = lazy(() => import("./component/TextToImg"));


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TextToImg />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
