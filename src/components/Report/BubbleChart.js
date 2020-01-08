import * as d3 from 'd3';

//grab array of distinct problem words
//const distinctWords=[...new Set(data[0].messages.map(obj=> obj.actual))];

//loop new array and build sub arrays for each value 
// const newData=distinctWords.map((word,i)=>{
//     return{[word]: data[0].messages.filter(obj=>obj.actual===word)}
// }) 

//clean up the data 
// const clean=newData.map((d,i)=>{
//   const current=d[distinctWords[i]];
//   const newObj={
//     actual: current[0].actual,
//     count: current.length,
//     expected: current[0].expected,
//     messsage: current[0].message,
//     note: current[0].note,
//   } 
//   return newObj;
// });

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
//     },
//     {
//         actual: "Ariel" ,
//         count: 5 ,
//         expected: [ "Ayriel" ],
//         message: "`Ariel` may be insensitive, use `Ayriel` instead" ,
//         note: "Refer to the person, rather than the disability, first."
//     },
//     {
//         actual: "heather" ,
//         count: 4 ,
//         expected: [ "Heather" ],
//         message: "`heather` may be insensitive, use `Heather` instead" ,
//         note: "Refer to the person, rather than the disability, first."
//     },
//     {
//         actual: "Davey" ,
//         count: 15 ,
//         expected: [ "David" ],
//         message: "`Davey` may be insensitive, use `David` instead" ,
//         note: "Refer to the person, rather than the disability, first."
//     }
// ];

const width = 300; 
const height = width;
const format = d3.format(",d");
//const color = d3.scaleOrdinal(data.map(d => d.group), d3.schemeCategory10);

export default class BubbleChart {
    constructor(element, clean){
        const pack = data => d3.pack()
                                .size([width - 2, height - 2])
                                .padding(3)
                                (d3.hierarchy({children: data}).sum(d => d.count));
        const root = pack(clean);
        const color = d3.scaleOrdinal(clean.map(d => d.actual), d3.schemeCategory10)
            .range(["#704AD6", "#7793F0", "#B76AD4", "#E9E5FC", "#4035A3", "#D9B8E6", "#5B63DA", "#B534E6","#9E8DF8"]);
        const svg = d3.select(element).append("svg")
            .attr("viewBox", [0, 0, width, height])
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle");
      
        const leaf = svg.selectAll("g")
          .data(root.leaves())
          .join("g")
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);
      
        leaf.append("circle")
            //.attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
            .attr("id", (d,i) => (d.leafUid = i))
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7)
            .attr("fill", d => color(d.data.actual));
      
        leaf.append("clipPath")
            //.attr("id", d => (d.clipUid = DOM.uid("clip")).id)
              .attr("id", (d,i) => (d.clipUid = i))
          .append("use")
            .attr("xlink:href", d => d.leafUid.href);
      
        leaf.append("text")
            .attr("clip-path", d => d.clipUid)
          .selectAll("tspan")
          .data(d => d.data.actual.split(/(?=[A-Z][^A-Z])/g))
          .join("tspan")
            .attr("x", 0)
            .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
            .text(d => d);
      
        leaf.append("title")
            .text(d => `Instead use: ${d.data.expected}\n This word was used: ${format(d.data.count)} time(s)`);
          
        return svg.node();
      
    }
}