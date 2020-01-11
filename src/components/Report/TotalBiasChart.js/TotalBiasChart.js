import * as d3 from 'd3';

export default class TotalBiasChart {
    constructor(element, biasData) {
        console.log('Hello World');

        // SET WIDTH, HEIGHT & RADIUS
        const width = 350;
        const height = width;
        const radius1 = Math.min(width, height) / 2;

        // SET COLOR SCHEME
        const colorBias = d3.scaleOrdinal(d3.schemeCategory10)
            .range(["#B534E6", "#B76AD4", "#D9B8E6", "#704AD6", "#9E8DF8"]);

        // SET BIAS TYPES PIE
        const pie = d3.pie()
            .value(function (d) { return d.value; })
            .sort(null);

        // CHANGE DATA TO ARRAY
        const data_all = d3.entries(biasData);
        // REMOVE KEY OF 'TOTAL'
        function checkBias(type) {
            return type.key != "total";
        }

        //REMOVE ALL ZERO VALUES 
        function removeZero(data) {
            return data.value != 0;
        }
        //
        const data_noZero = data_all.filter(removeZero);

        // ADD DATA TO PIE LAYOUT
        //const data_clean = pie(data_all.filter(checkBias));
        const data_clean = pie(data_noZero.filter(checkBias));

        console.log('data_all is: ', data_all);
        console.log('data_clean is: ', data_clean);


        // SET BIAS TYPES ARC
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius1);

        // SETUP SVG
        const svg = d3.select(element)
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            // .attr("viewBox", [0, 0, 550, 550]);
            .attr("viewBox", [0, 0, width, height]);

        const svgBias = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // CREATE GROUP
        const g = svgBias.selectAll(".arc")
            .data(data_clean)
            .enter().append("g")
            .attr("class", "sliceArc")
            .attr("stroke", '#DCDDDE');

        svgBias.selectAll('.arc')
            .data(data_clean)
            .enter()
            .append('text')
            .text(function (d) { return d.data.key })
            .attr('transform', function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .style("text-anchor", 'middle')
            .style("font-size", '2rem')
            .style("font", `'Open Sans', sans-serif`);

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return colorBias(d.data.key); })

    }
}