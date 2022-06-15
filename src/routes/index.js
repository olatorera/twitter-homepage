import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage";
import Modal from "../components/Modal";
import Viewpage from "../components/Viewpage";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/viewpage" element={<Viewpage />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
