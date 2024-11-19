import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Create from "./component/Create";
import NotFound from "./component/NotFound";
import SideBar from "./component/SideBar";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
