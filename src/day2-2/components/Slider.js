import React from 'react';
import './Slider.less';
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
     window.setInterval(()=>{
       this.turn(1);
     },this.props.delay*1000)
  }
  //用来改变index的值，改变多少取决于step的值。
  turn = (step)=>{
     let index = this.state.index;//取得老的index值
     index+=step;//加等于步长
     this.setState({index});//修改状态为最新的index值
  }
  render(){
     let style = {
        left: this.state.index * -300,//left值
        width:this.props.images.length*300,//宽度
        transitionDuration:this.props.speed+'s'//转换的时间
     }
     return (
       <div className="slider-wrapper">
         <ul className="sliders" style={style}>
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