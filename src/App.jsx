import "./App.css";
import { Blog, Footer, FooterSlider, UpcomingEvents } from "./components";
import Achievements from './components/Achievements'

function App() {
  return (
    <>
      <UpcomingEvents />
      <Achievements />
      <Blog />
      <FooterSlider/>
      <Footer />
    </>
  );
}

export default App;
