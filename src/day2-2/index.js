import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "./components/Slider";

let images = [
  {src: require('./images/1.jpg'), alt: '1.jpg'},
  {src: require('./images/2.jpg'), alt: '2.jpg'},
  {src: require('./images/3.jpg'), alt: '3.jpg'}
]

ReactDOM.render(<Slider/>, document.querySelector('#root'));