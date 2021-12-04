import React from 'react';

/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const { name, picture, price, isActive } = props;
  let active = 'card';
  if (isActive === 'false') {
    active = 'card inactive';
  }
  return (
    <div className = {active}>
      <div className='card-header'>
        <p className='card-title'>{name}</p>
        <span className='material-icons card-favorite'>favorite_border</span>
      </div>
      <img className='card-img' src={picture} alt={name} />
      <div className='card-bottom'>
        <p className='price'>$ {price}</p>
      </div>
    </div>
  );
};
