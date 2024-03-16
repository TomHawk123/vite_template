import { Routes, Route } from "react-router-dom";
import DragAndDrop from "./Pages/DragAndDropPage";
import ButtonsPage from "./Pages/ButtonsPage";
import DeleteThisPage from "./DeleteThisPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DeleteThisPage />} />
        <Route exact path="/drag_and_drop" element={<DragAndDrop />} />
        <Route exact path="/buttons" element={<ButtonsPage />} />
      </Routes>
    </>
  );
}

export default App;
