import React from 'react'
import './Card.css';
const Card = (props) => {
    const classes='card '+props.className;
  return (
    // acting as a wrapper
    <div className={classes} >
      {props.children}  {/*children is a reserved name we dont set children*/}
    </div>
  )
}

export default Card
