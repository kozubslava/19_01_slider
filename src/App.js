import React from "react";
import Slider from "./components/Slider";
import SlideImg1 from "./images/IMG_4403.jpg";
import SlideImg2 from "./images/IMG_4488.jpg";
import SlideImg3 from "./images/IMG_4584.jpg";
import SlideImg4 from "./images/IMG_5346.JPG";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [
        {
          id: 1,
          image: SlideImg1,
          description: "The top of the shoe is made of genuine leather.  ",
        },
        {
          id: 2,
          image: SlideImg2,
          description:
            "This mogel is also available in white leather and blue nubuck.",
        },
        {
          id: 3,
          image: SlideImg3,
          description:
            "The composition of the EVA sole has a light weight and high wear resistance.",
        },
        {
          id: 4,
          image: SlideImg4,
          description:
            "This model has a removable, molded, antibacterial insole.",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Slider slides={this.state.imageArr} />
      </>
    );
  }
}

export default App;
