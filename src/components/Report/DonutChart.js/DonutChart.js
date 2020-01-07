import * as d3 from 'd3';

export default class DonutChart {
    constructor(element, biasData) {
        console.log('Hello World');

        // SET WIDTH, HEIGHT & RADIUS
        const width = 600;
        const height = 400;
        const radius = Math.min(width, height) / 2;

        // SET COLOR SCHEME
        const color = d3.scaleOrdinal(d3.schemeCategory10)
            .range(["#5B63DA", "#9E8DF8", "#7793F0", "#E9E5FC", "#D9B8E6"]);

        // SET PIE
        const pie = d3.pie()
            .value(function (d) { return d.value; })
            .sort(null);

        // CHANGE DATA TO ARRAY
        const data_all = d3.entries(biasData);
        // REMOVE KEY OF 'TOTAL'
        function checkBias(type) {
            return type.key != "total";
        }
        // ADD DATA TO PIE LAYOUT
        const data_clean = pie(data_all.filter(checkBias));

        // SET ARC
        const arc = d3.arc()
            .innerRadius(radius - 80)
            .outerRadius(radius - 20);

        // SET ARC FOR LABEL POSITIONING (WILL NOT BE DRAWN)
        // const outerArc = d3.arc()
        //     .innerRadius(radius * 0.9)
        //     .outerRadius(radius * 0.9);

        // SETUP SVG
        const svg = d3.select(element)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // CREATE GROUP
        const g = svg.selectAll(".arc")
            .data(data_clean)
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return color(d.data.key); });

        // ADD POLYLINES BETWEEN CHART & LABELS
        // svg.selectAll("allPolylines")
        //     .data(data_clean)
        //     .enter()
        //     .append("polyline")
        //     .attr("stroke", "black")
        //     .style("fill", "none")
        //     .attr("stroke-width", 1)
        //     .attr('points', function (d) {
        //         var posA = arc.centroid(d) // line insertion in the slice
        //         var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        //         var posC = outerArc.centroid(d); // Label position = almost the same as posB
        //         var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        //         posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        //         return [posA, posB, posC]
        //     });

        // ADD LABELS
        // svg.selectAll("allLabels")
        //     .data(data_clean)
        //     .enter()
        //     .append("text")
        //     .text(function (d) { console.log(d.data.key); return d.data.key })
        //     .attr('transform', function (d) {
        //         var pos = outerArc.centroid(d);
        //         var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        //         pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        //         return 'translate(' + pos + ') ';
        //     }).style('text - anchor', function (d) {
        //         var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        //         return (midangle < Math.PI ? 'start' : 'end')
        //     });
    }
}