<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script>
	var width=400;var height=300
	var svg=d3.select("#info")
	.append('svg')
	.attr('height', height)
	.attr('width', width);
	var padding = {left:30, right:30, top:20, bottom:20};
	var Xscale=d3.scale.ordinal()
				.domain(d3.range(dataset.length))
				.rangeRoundBands([0,width-padding.left-padding.right])
	var Yscale=d3.scale.linear()
		.domain([0,d3.max(database)])
		.range([height-padding.bottom-padding.top,0])
	var Xaxis=d3.svg.axis()
				.scale(Xscale)
				.orient("bottom")
	var Yaxis=d3.svg.axis()
				.scale(Yscale)
				.orient('left')
	var rectpadding=4
	var rects=svg.selectAll(".myrects")
				.data(database)
				.enter()
				.append("rect")
				.attr("class", 'myrects')
				.attr('transform', "translate("+ padding.left+","+padding.top+")")
				.attr('x', function(d,i){
					return Xscale(i)+rectpadding/2
				})
				.attr('y',function(d){
					return Yscale(d)
				})
				.attr("width",Xscale.rangeBand()-rectpadding)
				.attr('fill', 'steelblue')
				.attr("height",function(d){return height-padding.top-padding.bottom-Yscale(d);})
				.on("mouseover",function(d,i){
					d3.select(this)
						.attr('fill', 'yellow');
				})
				.on("mouseout",function(d,i){
					d3.select(this)
						.transition()
						.duration(500)
						.attr("fill","steelblue")
				})
		svg.append('g')
			.attr('class', "axis")
			.attr('transform', "translate(" + padding.left +","+( height-padding.bottom )+ ")")
			.call(Xaxis);
		svg.append("g")
  			.attr("class","axis")
  			.attr("transform","translate(" + padding.left + "," + padding.top + ")")
  			.call(Yaxis);
  		var text=svg.selectAll(".mytext")
				.data(database)
				.enter()
				.append("text")
				.attr("class", 'mytext')
				.attr('transform', "translate("+ padding.left+","+padding.top+")")
				.attr('x', function(d,i){
					return Xscale(i)+rectpadding/2
				})
				.attr('y',function(d){
					return Yscale(d)
				})
				.attr("dx",Xscale.rangeBand()/2)
				.attr("dy",function(d){return Yscale(d)/2;})
				.text(function(d){return d})

</script>