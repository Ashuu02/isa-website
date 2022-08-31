import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import  Footer  from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Achievements from "./components/Achivements";

function App() {
  return (
    <>
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<AboutUs/>}/>
      <Route exact path="/achievements" element={<Achievements/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;
