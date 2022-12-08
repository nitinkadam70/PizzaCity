import React from 'react';

const DishCard = ({ item }) => {
  const { id, title, price, tags, description, img, type } = item;
  return (
    <div
      className="card text-center p-2 h-100"
      style={{ width: '16rem' }}
    >
      <img
        className="card-img-top w-50 m-auto border border-light"
        src={img}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="btn btn-outline-dark">₹{price}</span>
        <br />
        {tags == 'SPICY' && (
          <span className="btn-danger btn-sm">{tags}</span>
        )}
        {tags == 'BESTSELLER' && (
          <span className="btn-warning btn-sm">{tags}</span>
        )}
        <p className="card-text text-color-gray">{description}</p>
        <span className="btn-secondary btn-sm">{type}</span>
      </div>
    </div>
  );
};

export default DishCard;
