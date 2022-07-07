import * as d3 from "https://cdn.skypack.dev/d3@7";


d3.json('data.json').then(data => {
  
  const svg = d3
  .select('.box')
  .append('svg')
  .attr('width', 600)
  .attr('height', 500)
  .style('background', 'AntiqueWhite')
  ;
  
  const line = d3
  .line()
  .x(function(d){return d.point})
  .y(function(d,i){return (i+1)*50})
  ;
  
  svg.append('path').attr('d', line(data))

  /* Styling the path. */
  svg
    .select('path')
    .style('fill','none')
    .style('stroke', 'red')
    .style('stroke-width', '5px')
  ;
  
})