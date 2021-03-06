import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import "../css/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
