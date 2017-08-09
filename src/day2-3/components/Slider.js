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
     if(index > this.props.images.length){
       this.sliders.style.transitionDuration = '0s';
       this.sliders.style.left = '0px';
       //它会强行让浏览器重新渲染
       getComputedStyle(this.sliders,null).left;
       this.sliders.style.transitionDuration = '1s';
       index = 1;
     }else if(index<0){
       this.sliders.style.transitionDuration = '0s';
       this.sliders.style.left = this.props.images.length*-300+'px';
       getComputedStyle(this.sliders,null).left;
       this.sliders.style.transitionDuration = '1s';
       index = this.props.images.length-1;
     }
     this.setState({index});//修改状态为最新的index值
  }
  setSliders = (slider)=>{
    this.sliders = slider;
  }
  render(){
     return (
       <div
         onMouseOver={()=>clearInterval(this.timer)}
         onMouseOut={()=>this.go()}
         className="slider-wrapper">
          <SliderItems setSliders={this.setSliders} index={this.state.index} images={this.props.images} speed={this.props.speed}/>
         <SliderArrows turn = {this.turn}/>
         <SliderDots index={this.state.index} turn={this.turn} images={this.props.images}/>
       </div>
     )
  }
}