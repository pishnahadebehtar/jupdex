import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Nav from "./component/Nav";
import User from "./component/User";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
