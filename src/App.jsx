import "./App.css";
import { Blog, Footer, FooterSlider, UpcomingEvents, Achievements } from "./components";

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
