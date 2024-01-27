import React, { Component } from "react";
import Slide from "../Slide";
// import "./style.css"

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      autoPlay: false,
      inputValue: 1000,
    };
  }
  handleInputChange = (event) => {
    // Оновити стан при зміні введеного значення
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = () => {
    // Використовуйте this.state.inputValue для отримання значення введеного числа
    const inputValue = this.state.inputValue;
    console.log("Введене число:", inputValue);
    // Тут ви можете робити інші операції з отриманим числом
  };

  handleClickNext = () => {
    // const { index } = this.state; якщо зробити деструкторизацію, то this.state.index= index
    if (this.state.index === this.props.slides.length - 1) {
      this.setState({
        index: 0,
      });
      return;
    }

    this.setState({
      index: this.state.index + 1,
    });
  };

  handleClickPrev = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.props.slides.length - 1,
      });
      return;
    }

    this.setState({
      index: this.state.index - 1,
    });
  };

  handleAutoPlay = () => {
    this.setState((prevState) => ({
      autoPlay: !prevState.autoPlay,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.autoPlay) {
        this.handleClickNext();
        // console.log(this.state.inputValue);
      }
    }, 1000);
  }

  componentDidUpdate(_, prevState) {
    console.log(prevState);
    console.log(this.state.inputValue);

    if (prevState.inputValue !== this.state.inputValue) {
      clearInterval(this.intervalId);

      this.intervalId = setInterval(() => {
        if (this.state.autoPlay) this.handleClickNext();
      }, +this.state.inputValue);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  render() {
    const { slides } = this.props;

    return (
      <>
        <Slide
          image={slides[this.state.index].image}
          description={slides[this.state.index].description}
        />
        <button onClick={this.handleClickPrev}>Previous</button>
        <button onClick={this.handleAutoPlay}>
          {this.state.autoPlay ? "Stop" : "Play"}
        </button>
        <button onClick={this.handleClickNext}>Next</button>
        <div>
          <label htmlFor="numberInput">Введіть число:</label>
          <input
            type="number"
            id="numberInput"
            name="numberInput"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Отримати число
          </button>
        </div>
      </>
    );
  }
}

export default Slider;
