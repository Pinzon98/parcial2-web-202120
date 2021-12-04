import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Chart = ({ width = 600, height = 600, data}) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    d3.select(barChart.current).select("g").remove();
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    let tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("background", "#FFF")
    
    function mousemove(bar, product){
      tooltip.transition()
        .style('opacity', 1);
      tooltip.html(`Producto: ${product.name}, stock: ${product.stock}`)
        .style('left', (bar.x) + 'px')
        .style('top', (bar.y+100) + 'px')
    }

    function mouseRemove(){
      tooltip.transition()
        .style('opacity', 0);
    }
    
    const bars = g.selectAll("rect").data(data);
    bars.enter().append("rect")
      .attr("class", "bar")
      .style("fill", "black")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.stock))
      .attr("height", d => iheight - y(d.stock))
      .attr("width", x.bandwidth())  
      .on("mousemove", mousemove)
      .on("mouseout", mouseRemove)

    g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y))
  });

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};
