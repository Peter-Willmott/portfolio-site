import React from "react";
import ReactDOM from 'react-dom';

// Components
import Navigation from "./components/navigation";
import Landing from "./components/landing";
import About from "./components/about";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Preloader from "./components/preloader";
import BackToTop from "./components/backToTop";

// CSS
import './index.css';
//import "antd/dist/antd.css";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <Navigation />
    <Landing />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Preloader />
    <BackToTop />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





