import "./App.css";
import { Blog, Footer } from "./components";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer1 from "./components/Footer1";
import './components/Footer1.css'
function App() {
  return (
    <>
      <Blog />
      <UpcomingEvents />
      <Footer1/>
      <Footer />
    </>
  );
}

export default App;
