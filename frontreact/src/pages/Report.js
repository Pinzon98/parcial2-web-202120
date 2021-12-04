import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Chart } from '../components/Chart';

export const Report = ({ searchKey }) => {
  let [products, setProducts] = useState([]);
  const url = 'http://localhost:3001/api/products?q=' + searchKey;
  useEffect(()=>{
    fetch(url).then(response => response.json()).then(data => setProducts(data.resp));
  },[searchKey])

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="inventary"/></h1>
        <Chart data = {products}></Chart>
      </div>
    </section>
  );
};
