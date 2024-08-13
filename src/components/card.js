// src/components/Card.js
import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="col-md-3">
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <img src={data.images} alt="Product" className="img-responsive" />
        </div>
        <div className="wsk-cp-text">
          <div className="category">
            <span>{data.title}</span>
          </div>
          <div className="title-product">
            <h3>{data.description}</h3>
          </div>
          <div className="card-footer">
            <div className="wcf-left"><span className="price">{data.price}0</span></div>
            <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
