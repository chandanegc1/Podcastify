import Screen from "./pages/Favourites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Favourites from "./pages/Favourites";
function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
