import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../public/css/styles.css';

import App from "next/app";
import PointsProvider from "../context/Points";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PointsProvider>
        <Component {...pageProps} />
      </PointsProvider>
    );
  }
}

export default MyApp;
