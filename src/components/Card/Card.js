import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <span onClick={() => props.handleClicked(props.id) } className="shuffle"><img alt={props.id} src={props.image} /></span>
    </div>
  </div>
);

export default Card;
