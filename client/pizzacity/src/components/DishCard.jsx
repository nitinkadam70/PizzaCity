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
        <span className="badge badge-success">₹{price}</span>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DishCard;
