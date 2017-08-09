import React from 'react';
export default class SliderDots extends React.Component{
  render(){
    return (
      <div className="dots">
        {
          this.props.images.map((image,index)=>(
            <span className={index==this.props.index?'active':''} onClick={()=>this.props.turn(index-this.props.index)} key={index}></span>
          ))
        }
      </div>
    )
  }
}