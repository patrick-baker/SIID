import * as d3 from 'd3';

export default class DonutChart {
    constructor(element, biasData) {
        console.log('Hello World');

        // SET WIDTH, HEIGHT & RADIUS
        const width = 300;
        const height = 300;
        const donutBiasWidth = 40;
        const donutTotalWidth= 30;
        const radius1 = Math.min(width, height) / 2;
        const radius2 = radius1 - donutBiasWidth;

        // SET COLOR SCHEME
        const colorBias = d3.scaleOrdinal(d3.schemeCategory10)
            .range(["#B534E6", "#B76AD4", "#D9B8E6", "#704AD6", "#9E8DF8"]);
        const colorTotal = d3.scaleOrdinal(d3.schemeCategory10)
            .range(["#9E8DF8", "#7793F0"]);

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

        // ADD DATA TO PIE LAYOUT
        const data_clean = pie(data_all.filter(checkBias));

        console.log('data_all is: ', data_all);
        console.log('data_clean is: ', data_clean);
        

        // SET BIAS TYPES ARC
        const arc = d3.arc()
            .innerRadius(radius2)
            .outerRadius(radius1);
        
        // SETUP SVG
        const svg = d3.select(element)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
        
        const svgBias = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
        const svgTotal = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // CREATE GROUP
        const g = svgBias.selectAll(".arc")
            .data(data_clean)
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return colorBias(d.data.key); });
        
////////////////////////////////////////////////////////////////////////////////

        function sumBiases(data) {
            let sum = 0;
            for (let property in data) {
                if(property !== 'total') {
                    sum += data[property]
                }
            }
            return sum;
        }

        console.log('sum of biased counts: ', sumBiases(biasData));
        const biasSum = sumBiases(biasData)

        // ARRAY FOR TOTAL SENSITIVITIES
        const totalData = [{"key": 'Sensitive', "value": biasSum}, {"key": 'total', "value": biasData.total - biasSum}];
        

        // 
        const total_clean = pie(totalData);

        console.log('totalData is: ', totalData);
        console.log('total_clean is: ', total_clean);

        // SET TOTAL ARC
        const totalArc = d3.arc()
            .innerRadius(radius2 - donutTotalWidth)
            .outerRadius(radius2-1);

        // CREATE GROUP
        const gTotal = svgTotal.selectAll(".arcTotal")
            .data(total_clean)
            .enter().append("g")
            .attr("class", "arcTotal");

        gTotal.append("path")
            .attr("d", totalArc)
            .style("fill", function (d) { return colorTotal(d.data.key); });

        // // SET ARC FOR LABEL POSITIONING (WILL NOT BE DRAWN)
        // const outerArc = d3.arc()
        //     .innerRadius(radius * 0.9)
        //     .outerRadius(radius * 0.9);

        

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