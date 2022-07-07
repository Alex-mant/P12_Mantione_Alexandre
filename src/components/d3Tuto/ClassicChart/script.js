import * as d3 from "https://cdn.skypack.dev/d3@7";

/* Creating a svg element and appending it to the div with the class box. */
const svg = d3
  .select('.box')
  .append('svg')
  .attr('width', 600)
  .attr('height', 550)
  .style('background', 'AntiqueWhite')
;

/* Creating a margin for the graph. */
const margin = {top:20, right: 20, bottom:100, left:100}
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

/* Creating a group for the graph. */
const graph = svg
  .append('g')
  .attr('width', graphWidth)
  .attr('heigth', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
;

/* Creating a group for the x and y axis. */
const groupeX = graph
  .append('g')
  .attr('transform',`translate(0, ${graphHeight})`)
;
const groupeY = graph.append('g');

d3.json('data.json').then(data => {

  /* Finding the maximum value of the data. */
  const max = d3.max(data, d => d.prix);
  const y = d3
    .scaleLinear()
    .domain([0, max])
    .range([graphHeight, 0])
  ;

  /* Creating a scaleBand for the x axis. */
  const x = d3
    .scaleBand()
    .domain(data.map(item => item.nom))
    .range([0, 480])
    .paddingInner(0.9)
    .paddingOuter(0.2)
  ;

  /* Selecting all the rectangles in the graph and binding them to the data. */
  const rects = graph
    .selectAll('rect')
    .data(data)
  ;

  /* Updating the attributes of the rectangles. */
  rects
    .attr('width', x.bandwidth())
    .attr('height', function(d){return graphHeight - y(d.prix)})
    .attr('fill','black')
    .attr('x', function(d){return x(d.nom)})
    .attr('y', function(d){return y(d.prix)})
    .style('border-radius', '10px')
  ;

  /* Creating the rectangles. */
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth())
    .attr('height', function(d){return graphHeight - y(d.prix)})
    .attr('fill','black')
    .attr('x', function(d){return x(d.nom)})
    .attr('y', function(d){return y(d.prix)})
    .style('border-radius', '10px')
  ;


  /* Creating the axis. */
  const axeX = d3.axisBottom(x)
  const axeY = d3
    .axisLeft(y)
    .ticks(5)
    .tickFormat(d => d + ' €' )
  ;

  /* Calling the axis. */
  groupeX.call(axeX);
  groupeY
    .call(axeY)
    .style('font-size','13px')
  ;
})