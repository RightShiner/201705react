import React from 'react';
import './Slider.less';
export default class Slider extends React.Component{
  render(){
     return (
       <div className="slider-wrapper">
         <ul className="sliders">
           {
             this.props.images.map((image,index)=>(
               <li className="slider">
                 <img src={image.src} alt={image.alt}/>
               </li>
             ))
           }
         </ul>
       </div>
     )
  }
}