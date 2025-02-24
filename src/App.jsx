import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
<div className="radio-container">
  <label>
    <input type="radio" name="role" value="technicien" /> Technicien
  </label>
  <label>
    <input type="radio" name="role" value="admin" /> Admin
  </label>
</div>;


