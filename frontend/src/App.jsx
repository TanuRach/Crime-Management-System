import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Report from "./pages/report";
import NoPage from "./pages/NoPage";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen">
              <Login name="Have an account? Login" />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<Report />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
