import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3001/api/products?q=' + searchKey;
  useEffect(()=>{
    fetch(url).then(response => response.json()).then(data => setProducts(data.resp));
  },[searchKey])

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id="gallery"/></h1>
        <div className='home-card'>
          {products?.map((d) => (
            <Card 
            name = {d.name}
            picture = {d.picture}
            price = {d.price}
            isActive = {d.isActive}
            key = {d._id}/>
          ))}
        </div>
      </div>
    </section>
  );
};
