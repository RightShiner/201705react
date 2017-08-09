import React from 'react';
import './Slider.less';
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Slider extends React.Component{
  constructor(){
    super();
    this.state = {index:0};
  }
  componentDidMount(){
    if(this.props.autoPlay){//如果要启动自动轮播
        this.go();//开始轮播
    }
  }
  go = ()=>{//开始轮播
     this.timer = window.setInterval(()=>{
       this.turn(1);
     },this.props.delay*1000)
  }
  //用来改变index的值，改变多少取决于step的值。
  turn = (step)=>{
     let index = this.state.index;//取得老的index值
     index+=step;//加等于步长
     if(index >= this.props.images.length){
        index = 0;
     }else if(index<0){
       index = this.props.images.length-1;
     }
     this.setState({index});//修改状态为最新的index值
  }
  render(){
     return (
       <div
         onMouseOver={()=>clearInterval(this.timer)}
         onMouseOut={()=>this.go()}
         className="slider-wrapper">
          <SliderItems index={this.state.index} images={this.props.images} speed={this.props.speed}/>
         <SliderArrows turn = {this.turn}/>
         <SliderDots index={this.state.index} turn={this.turn} images={this.props.images}/>
       </div>
     )
  }
}