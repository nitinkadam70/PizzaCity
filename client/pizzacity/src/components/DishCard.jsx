import React from 'react';

const DishCard = ({ item }) => {
  //Destructing Item here
  const { id, title, price, tags, description, img, type } = item;

  return (
    // Card
    <div
      className="card text-center p-2 h-100 card-hover position-relative"
      style={{ width: '16rem' }}
    >
      {/* Image */}
      <img
        className="card-img-top w-50 m-auto border border-light"
        src={img}
        alt={title}
      />
      {/* Body */}
      <div className="card-body">
        <div className="row">
          {/* Title */}
          <h5 className="card-title w-100 text-truncate mb-2">
            {title}
          </h5>
        </div>
        {/* price and type */}
        <div className="mb-2">
          <span className="btn btn-outline-dark">₹{price}</span>
          <span className="btn-secondary btn-sm">{type}</span>
        </div>

        {/* Tags */}
        <div className="position-absolute top-0 translate-middle">
          {tags == 'SPICY' && (
            <span className="btn-danger btn-sm">{tags}</span>
          )}
          {tags == 'BESTSELLER' && (
            <span className="btn-warning btn-sm">{tags}</span>
          )}
        </div>
        {/* Description */}
        <p className="card-text text-color-gray text-justify ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DishCard;
