import React from 'react';
export default class SliderItems extends React.Component{
  render(){
    let style = {
      left: this.props.index * -300,//left值
      width:this.props.images.length*300,//宽度
      transitionDuration:this.props.speed+'s'//转换的时间
    }
    return (
      <ul className="sliders" style={style}>
        {
          this.props.images.map((image,index)=>(
            <li className="slider">
              <img src={image.src} alt={image.alt}/>
            </li>
          ))
        }
      </ul>
    )
  }
}