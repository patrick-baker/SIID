import * as d3 from 'd3';

//sample format of expected data
//actual is the word that was found in the text
// count is the number of times this word was found in the text
// expected is the array of suggested replacements
// message is the context about why this rule exists and often includes replacements but not always
// note is visible and modifiable by admins on the rule page. 
////it often doesn't contain user relevant info but includes links to resources about the rule

// const clean=[{
//     actual: "Patty" ,
//     count: 2 ,
//     expected: ["Patrick" , "Mr. Baker"],
//     message: "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead" ,
//     note: "Refer to the person, rather than the disability, first."
//     },
//     {
//     actual: "Tommy" ,
//     count: 1 ,
//     expected: [ "Thomas" ],
//     message: "`Tommy` may be insensitive, use `Thomas` instead" ,
//     note: "Refer to the person, rather than the disability, first."
//     }
// ];

//keep square proportion to best utilize size of space  given  due to use of hierarchy/pack 
const width = 350; 
const height = width;
const format = d3.format(",d");


export default class BubbleChart {
    constructor(element, clean){
        // function to porportion bubble by count and format data
        const pack = data => d3.pack()
                                .size([width - 2, height - 2])
                                .padding(3)
                                (d3.hierarchy({children: data})
                                    .sum(d => d.count));
                                   
        const root = pack(clean);

        //color array set to to variety of colors found in the sass variables according to current scheme
        //colors will automatically have opaqueness added so text is always legible
        const color = d3.scaleOrdinal(clean.map(d => d.actual), d3.schemeCategory10)
            .range(["#704AD6", "#7793F0", "#B76AD4", "#E9E5FC", "#4035A3", "#D9B8E6", "#5B63DA", "#B534E6","#9E8DF8"]);
        
        //create the svg in the div within BubbleChartWrapper
        const svg = d3.select(element).append("svg")
            .attr("viewBox", [0, 0, width, height])
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle")

        //add g element for each sub datum and place
        const leaf = svg.selectAll("g")
          .data(root.leaves())
          .join("g")
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);
            
        //draw circle fill with color from scheme and outline slightly
        leaf.append("circle")
            .attr("id", (d,i) => (d.leafUid = i))
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7)
            .attr("fill", d => color(d.data.actual))
            .attr("stroke", '#DCDDDE')
            //with mouseover darken color by adjusting opacity and add dark purple outline
            .on('mouseover', function (d, i) {
                d3.select(this).transition()
                     .duration('50')
                     .attr('opacity', '1')
                     .attr('stroke', "#422997")
                    })
            //reset opacity on mouseout and set stroke back to light color     
           .on('mouseout', function (d, i) {
                d3.select(this).transition()
                     .duration('50')
                     .attr('opacity', '.7')
                     .attr("stroke", '#DCDDDE')
                    })

        //add the text to the bubbles            
        leaf.append("text")
          .selectAll("tspan")
            //without split text is applied veritcally this allows us to swap labels to horizontal
          .data(d => d.data.actual.split(/(?=[A-Z][^A-Z])/g))
          .join("tspan")
            //position text
            .attr("x", 0)
            .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
            //add the text from the data
            .text(d => d)
                .attr("font-size", '2rem')

        //add default hover formating by adding titles with expected and counts
        leaf.append("title")
            .text(d => `Instead use: ${d.data.expected}\n This word was used: ${format(d.data.count)} time(s)`);
          
        return svg.node();
      
    }
}