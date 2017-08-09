import React from 'react';
export default class SliderDots extends React.Component{
  render(){
    return (
      <div className="dots">
        {
          this.props.images.map((image,index)=>(
            <span key={index}></span>
          ))
        }
      </div>
    )
  }
}