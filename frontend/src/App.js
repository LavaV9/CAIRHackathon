import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Camera from "./pages/Camera"; // 👈 add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/camera" element={<Camera />} /> {/* 👈 add this */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> later maybe */}
      </Routes>
    </Router>
  );
}

export default App;







