import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import ToDoPage from "./pages/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
