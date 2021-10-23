import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Particles from "react-particles-js";

function App() {
  const particlesOptions = {
    polygon: {
      enable: true,
      type: "inside",
      move: {
        radius: 10,
      },
      url: "path/to/svg.svg",
    },
  };

  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
