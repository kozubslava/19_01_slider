import React,{ Component } from "react";
import Slide from '../Slide';
// import "./style.css"



class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      autoPlay: false
    };
  }
  handleClickNext = () => {
    // const { index } = this.state; якщо зробити деструкторизацію, то this.state.index= index
    if (this.state.index === this.props.slides.length -1) {
      this.setState({
        index: 0,
      }); 
      return
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
      return
    }
    

    this.setState({
      index: this.state.index - 1,
    });
  };

  handleAutoPlay = () => {
    this.setState((prevState) => ({
      autoPlay: !prevState.autoPlay
    }))
    
  }
  componentDidMount(){
    
        this.intervalId = setInterval(() => {
          if (this.state.autoPlay) {
            this.handleClickNext()
          }
        }, 1000);
      
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  render() {
    const {slides} = this.props
    
    return (
      <>
        <Slide image={slides[this.state.index].image} description={slides[this.state.index].description}/>
        <button onClick={this.handleClickPrev}>Previous</button>
        <button onClick={this.handleAutoPlay}>{this.state.autoPlay ? "Stop" : "Play" }</button>
        <button onClick={this.handleClickNext}>Next</button>
        <input></input>

      </>
    )
    
  }
}

export default Slider;