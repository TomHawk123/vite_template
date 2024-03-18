import { Routes, Route } from "react-router-dom";
import DragAndDrop from "./Pages/DragAndDropPage";
import ButtonsPage from "./Pages/ButtonsPage";
import DeleteThisPage from "./DeleteThisPage";
import FormWithOptionalModalPage from "./Pages/FormWithOptionalModalPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DeleteThisPage />} />
        <Route exact path="/drag_and_drop" element={<DragAndDrop />} />
        <Route exact path="/buttons" element={<ButtonsPage />} />
        <Route
          exact
          path="/form_with_optional_modal"
          element={<FormWithOptionalModalPage />}
        />
      </Routes>
    </>
  );
}

export default App;
