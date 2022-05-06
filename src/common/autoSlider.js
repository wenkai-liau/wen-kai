import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import imageOne from "../images/night_panorama.jpg";
import imageTwo from "../images/craterLake.jpg";
import imageThree from "../images/banff.jpg";
import imageFour from "../images/marina.jpg";
import imageFive from "../images/moraineLake.jpg";

const AutoSlider = ({ height, width }) => {
  const smallScreen = width < 720;

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      bullets={false}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
    >
      <div className="row">
        <img
          src={imageOne}
          width={smallScreen ? width : 1200}
          height={smallScreen ? 150 : 350}
        />
      </div>
      <div className="row">
        <img
          src={imageTwo}
          width={smallScreen ? width : 1200}
          height={smallScreen ? 150 : 350}
        />
      </div>
      <div className="row">
        <img
          src={imageThree}
          width={smallScreen ? width : 1200}
          height={smallScreen ? 150 : 350}
        />
      </div>
      <div className="row">
        <img
          src={imageFour}
          width={smallScreen ? width : 1200}
          height={smallScreen ? 150 : 350}
        />
      </div>
      <div className="row">
        <img
          src={imageFive}
          width={smallScreen ? width : 1200}
          height={smallScreen ? 150 : 350}
        />
      </div>
    </AutoplaySlider>
  );
};
export default AutoSlider;
