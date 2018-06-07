import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, css } from "./withStyles";
// import { StyleSheet, css } from "aphrodite";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import cssGlobal from "../css/styles.scss";
// import { Text } from "Maurio";

// const styles = StyleSheet.create({
//   red: {
//     backgroundColor: "red"
//   },

//   blue: {
//     backgroundColor: "blue"
//   },

//   hover: {
//     ":hover": {
//       backgroundColor: "red"
//     }
//   },

//   small: {
//     "@media (max-width: 600px)": {
//       backgroundColor: "red"
//     }
//   }
// });

class App extends Component {
  render() {
    const { styles } = this.props;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    // return (
    //   <div>
    //     <span className={css(styles.red)}>This is red.</span>
    //     <span className={css(styles.hover)}>This turns red on hover.</span>
    //     <span className={css(styles.small)}>
    //       This turns red when the browser is less than 600px width.
    //     </span>
    //     <span className={css(styles.red, styles.blue)}>This is blue.</span>
    //     <span className={css(styles.blue, styles.small)}>
    //       This is blue and turns red when the browser is less than 600px width.
    //     </span>
    //   </div>
    // );
    // <div className={cssGlobal.prueba}>css modules 123</div>
    // <Slider {...settings}>
    //   <div>
    //     <h3>a</h3>
    //   </div>
    //   <div>
    //     <h3>b</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>
    //   <div>
    //     <h3>5</h3>
    //   </div>
    //   <div>
    //     <h3>6</h3>
    //   </div>
    // </Slider>

    return (
      <div>
        <div>
          <span {...css(styles.red)}>This is red.</span>
          <span {...css(styles.hover)}>This turns red on hover.</span>
          <span {...css(styles.small)}>
            This turns red when the browser is less than 600px width.
          </span>
          <span {...css(styles.red, styles.blue)}>This is blue.</span>
          <span {...css(styles.blue, styles.small)}>
            This is blue and turns red when the browser is less than 600px
            width.
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(() => ({
  red: {
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "blue"
  },
  hover: {
    ":hover": {
      backgroundColor: "red"
    }
  },
  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  }
}))(App);
// export default App;
