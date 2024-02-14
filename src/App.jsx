import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(true);

  return (
    <Router>
      <SideBar menu={menu} setMenu={setMenu} />
      <div className={`${menu === true ? "lg:pl-52" : "w-full"} h-16`}>
        <Navbar setMenu={setMenu} menu={menu} />
      </div>
      <div className={`${menu === true ? "lg:pl-52" : ""}`}>
        <Routes className="border-[5px]">
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
