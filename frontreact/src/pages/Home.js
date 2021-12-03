import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3001/api/products';
  useEffect(()=>{
    fetch(url).then(response => response.json()).then(data => setProducts(data.resp));
  },[])

  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Gallery</h1>
        <div className='home-card'>
          {products?.map((d) => (
            <Card 
            name = {d.name}
            picture = {d.picture}
            price = {d.price}/>
          ))}
        </div>
      </div>
    </section>
  );
};
