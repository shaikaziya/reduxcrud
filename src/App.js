import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import AddUser from "./AddUser";
import Home from "./Home";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<AddUser />} />
        <Route path="/:id" element={<ViewUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
