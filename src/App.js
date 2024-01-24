import React from "react";
import Slider from "./components/Slider";
import SlideImg1 from "./images/IMG_4403.jpg"
import SlideImg2 from "./images/IMG_4488.jpg"
import SlideImg3 from "./images/IMG_4584.jpg"
import SlideImg4 from "./images/IMG_5346.JPG"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [
        { id: 1, image: SlideImg1, description: "1111111111111111" },
        { id: 2, image: SlideImg2, description: "2222222222222222" },
        { id: 3, image: SlideImg3, description: "3333333333333333" },
        { id: 4, image: SlideImg4, description: "4444444444444444" },
      ],
    };
  }
  render() {
    return (
      <>
      <Slider slides={this.state.imageArr}/>
      </>
    );
  }
}

export default App;