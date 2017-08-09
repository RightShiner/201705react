import React from 'react';
export default class SliderItems extends React.Component{
  componentDidMount(){
    this.props.setSliders(this.refs.sliders);
  }
  render(){
    let style = {
      left: this.props.index * -300,//left值
      width:(this.props.images.length+1)*300,//宽度
      transitionDuration:this.props.speed+'s'//转换的时间
    }

    return (
      <ul ref="sliders" className="sliders" style={style}>
        {
          this.props.images.map((image,index)=>(
            <li className="slider">
              <img src={image.src} alt={image.alt}/>
            </li>
          ))
        }
        <li className="slider" key={this.props.images.length}>
          <img src={this.props.images[0].src} alt={this.props.images[0].alt}/>
        </li>
      </ul>
    )
  }
}