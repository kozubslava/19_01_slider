import React, { Component } from "react";
import styles from "./slide.module.scss";

class Slide extends Component {
  render() {
    const { image, description } = this.props;

    return (
      <div className={styles.slide}>
        <img src={image} alt={description} />
        <p>{description}</p>
      </div>
    );
  }
}

export default Slide;
