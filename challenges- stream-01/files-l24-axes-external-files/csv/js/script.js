var canvasHeight, maxData, d3; // fix IDE warning messages

d3.csv("list.csv", function(error, myData) {
    myData.forEach(function(d) {
         d.username = d.user;
         d.score = +d.highscore;   //the + here converts to a number
    });
     
    var svgWidth = 700,
        svgHeight = 500;
     
    //calc svg canvas dimensions
    var margin = {top: 50, right: 0, bottom: 50, left: 50},
        canvasWidth = svgWidth + margin.right + margin.left;
        canvasHeight = svgHeight + margin.top + margin.bottom;
     
    var spacing= 2;
    
    var maxData = d3.max(myData, function(d) { return d.score; });
    
    //color scale of bars
    var colorScale = d3.scale.linear()
                       .domain([0, maxData])
                       .range(["blue","red"]);
                       
    //create x-axis scaling function
    var xAxisScale = d3.scale.ordinal()
                       .domain(myData.map(function(d) { return d.username; }))
                       .rangeBands([0, svgWidth]);
                       
    //create a new x-axis
    var xAxis = d3.svg.axis()
                  .scale(xAxisScale)
                  .orient("bottom")
                  .ticks(myData.length);
    
    //create y-axis scaling function				   
    var yAxisScale = d3.scale.linear()
                       .domain([0, maxData])
                       .range([svgHeight , 0]); // swap range values to flip the axis
      
    //create new y-axis
    var yAxis = d3.svg.axis()
                  .scale(yAxisScale)
                  .orient("left")
                  .ticks(5);
    			  
    //bar height scale: set domain and range 
    var heightScale = d3.scale.linear()
                        .domain([0, maxData])
                        .range([0,svgHeight]);
    					
    var tooltip = d3.select("body")
                    .append("div")
    				.classed("hidden",true)
                    .attr("id","tooltip");
                    
    //setup canvas and append an svg object to it
    var canvas = d3.select("body")
            	   .append("svg")
            	   .attr("width",canvasWidth)
            	   .attr("height",canvasHeight)
            	   .attr("style","background-color:#ddd");
            	   
    //add x-axis to the canvas
    canvas.append("g")
          .attr("class", "axis")
          .attr("transform", "translate("+ margin.left +","+ (canvasHeight - (margin.bottom - 2)) + ")")
          .call(xAxis);
     
    //append g (group) element, add a class and apply styles to it. then generate the axis.
    canvas.append("g")
          .attr("class","axis")  // style axis via CSS
          .attr("transform","translate("+ (margin.left - 2) +"," + margin.bottom + ")")
          .call(yAxis);
          
    //append chart title and position
    canvas.append("g")
          .append("text")
          .text("Bar Chart")
          .attr("x", canvasWidth / 2)
          .attr("y", 30)
          .attr("class","title");
     
    //append the graph canvas and add it to the group(g)
    var svg = canvas.append("g")
                	.attr("width",svgWidth)
                	.attr("height",svgHeight)
                	.attr("style","background-color:#ddd") /* added some style*/
                	.attr("transform","translate("+ margin.left +"," + margin.bottom + ")");
    				 
    //append the group(g) svg and store in a var
    var g = svg.append('g');
    
    //show the graph
    g.selectAll("rect")
       .data(myData)
       .enter()
       .append("rect")  
       .attr("x", function(d, i) {return i * (svgWidth / myData.length);})  
       .attr("y", function(d){return svgHeight - heightScale(d.score);}) 
       .attr("width", (svgWidth / myData.length) - spacing)
       .attr("height", function(d){return heightScale(d.score)})
       .attr("fill", function(d){return colorScale(d.score)})
       .on("mouseout", function(){    
            d3.select("#tooltip")
              .classed("hidden", true);            
    	})
       .on("mouseover", function(d){    
            d3.select("#tooltip")
        	  .classed("hidden", false)
              .style("left", d3.event.pageX + "px")  // in this case we need        
              .style("top", d3.event.pageY - 50 + "px");   //to append px as units
        tooltip.html(d.score);            
    });
});    //we finish with closing brackets and semicolon