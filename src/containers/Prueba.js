import React, { Component } from "react";
import PropTypes from "prop-types";

import ErrorBoundary from "../errorBoundary";
import cssGlobal from "../../css/styles.scss";

import SearchHotels from "Maurio/lib/Organisms/Search/SearchHotels";
import SearchPaquetes from "Maurio/lib/Organisms/Search/SearchPaquetes";
// import SearchVuelos from "Maurio/lib/Organisms/Search/SearchVuelos";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SearchHotels />
        <div className={cssGlobal.prueba}>123</div>
        <SearchPaquetes />
      </ErrorBoundary>
    );
  }
}

export default App;
