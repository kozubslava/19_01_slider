import React,{ Component } from "react";
import Slide from '../Slide';
// import "./style.css"



class Slider extends Component {

  
  
  
//   handleDelete = (id) => {
    
//     const newUsersArr = this.state.usersArr.filter((user) => id !== user.id  )
//     this.setState({usersArr: newUsersArr})
//     console.log(newUsersArr);
//   };
  
  render() {
    const {slides} = this.props
    console.log(slides[1].image);

    
    
    return (
      <>
        <Slide image={slides[0].image} description={slides[0].description}/>
        <button>Previous</button>
        <button>Next</button>

      </>
    )
    
  }
}

export default Slider;