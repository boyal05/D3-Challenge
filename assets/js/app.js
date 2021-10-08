// @TODO: YOUR CODE HERE!
var dataset = [[90,20], [20,100], [66,44],[53, 80], [24, 182], [80,72], [10, 76], [33, 150], [100, 15]];
//var dataset = d3.csv("assets/data/data.csv");
var margin={top: 10, right: 30, bottom: 30, left:60},
width=500- margin.left - margin.right,
height=400-margin.top - margin.bottom;

var svg = d3.select("#scatter")
.append("svg")
  .attr("width", width+margin.left+margin.right)
  .attr("height", height+margin.top+margin.bottom)
.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top +")");

// title
svg.append('text')
.attr('x', width/2+margin.left)
.attr('y', margin.top)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvitica')
.style('font-size', 20)
.text('Scatter Plot');

// xLabel
svg.append('text')
.attr('x', width/2 + margin.left)
.attr('y', height + margin.bottom + margin.top)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvitica')
.style('font-size', 12)
.text('Independent');

//yLabel
svg.append('text')
.attr('text-anchor', 'middle')
.attr('transform', 'translate(30,' + (height/2) + ') rotate(-90)')
.style('font-family', 'Helvitica')
.style('font-size', 12)
.text('Dependent');

d3.csv("assets/data/data.csv", function(data) {
  var xScale = d3.scaleLinear().domain([0,100]).range([0, width]),
  yScale=d3.scaleLinear().domain([0,20]).range([height, 0]);

  svg.append("g")
  .attr("transform", "translate(0,"+height+")")
  .call(d3.axisBottom(xScale));

  svg.append("g")
  .call(d3.axisLeft(yScale));

  svg.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    //.attr("cx", function (d) { return xScale(d[3]); })
    .attr("cx", function (d) { return xScale(d.poverty); })
    //.attr("cy", function (d) { return yScale(d[5]); })
    .attr("cy", function (d) { return yScale(d.age); })
    .attr("r", 2)
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .style("fill", "#CC0000");
    //.text(function(d) { return d.abbr;});

  console.log(data.abbr);

});
