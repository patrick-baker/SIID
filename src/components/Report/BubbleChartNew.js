import * as d3 from "d3";

//for other chart 
const biasData={gender:{count: 4},lgbtq:{count: 0},race:{count: 6}}

//sample of input for this chart
const data=[{
    "data": {},
    "messages": [
        {
            "message": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
            "name": "1:2-1:7",
            "reason": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
            "line": 1,
            "column": 2,
            "location": {
                "start": {
                    "line": 1,
                    "column": 2,
                    "offset": 1
                },
                "end": {
                    "line": 1,
                    "column": 7,
                    "offset": 6
                }
            },
            "source": "retext-SIID-SSID",
            "ruleId": "Test-2",
            "fatal": false,
            "actual": "Patty",
            "expected": [
                "Patrick",
                "Mr. Baker"
            ],
            "note": "Refer to the person, rather than the disability, first."
        },
        {
            "message": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
            "name": "1:2-1:7",
            "reason": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
            "line": 1,
            "column": 2,
            "location": {
                "start": {
                    "line": 1,
                    "column": 2,
                    "offset": 1
                },
                "end": {
                    "line": 1,
                    "column": 7,
                    "offset": 6
                }
            },
            "source": "retext-SIID-SSID",
            "ruleId": "Test-2",
            "fatal": false,
            "actual": "Patty",
            "expected": [
                "Patrick",
                "Mr. Baker"
            ],
            "note": "Refer to the person, rather than the disability, first."
        },
        {
            "message": "`Tommy` may be insensitive, use `Thomas` instead",
            "name": "1:2-1:7",
            "reason": "`Tommy` may be insensitive, use `Patrick` instead",
            "line": 1,
            "column": 2,
            "location": {
                "start": {
                    "line": 1,
                    "column": 2,
                    "offset": 1
                },
                "end": {
                    "line": 1,
                    "column": 7,
                    "offset": 6
                }
            },
            "source": "retext-SIID-SSID",
            "ruleId": "Test-2",
            "fatal": false,
            "actual": "Tommy",
            "expected": [
                "Thomas"
            ],
            "note": "Refer to the person, rather than the disability, first."
        }
    ],
    "history": [],
    "cwd": "/Users/davidsearl/prime/tier3/SIID",
    "contents": "\"Patty went for a beer\""
}];
//grab array of distinct problem words
const distinctWords=[...new Set(data[0].messages.map(obj=> obj.actual))];

//loop new array and build sub arrays for each value 
const newData=distinctWords.map(word=>{
    return{[word]: data[0].messages.filter(obj=>obj.actual===word)}
}) 


/* example of new data
[{
    Patty: [
    {
    message: "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead" ,
    name: "1:2-1:7" ,
    reason: "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead" ,
    line: 1 ,
    column: 2 ,
    location: {...},
    source: "retext-SIID-SSID" ,
    ruleId: "Test-2" ,
    fatal: false ,
    actual: "Patty" ,
    expected:(2) [...],
    note: "Refer to the person, rather than the disability, first."
    },
    {
    message: "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead" ,
    name: "1:2-1:7" ,
    reason: "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead" ,
    line: 1 ,
    column: 2 ,
    location: {...},
    source: "retext-SIID-SSID" ,
    ruleId: "Test-2" ,
    fatal: false ,
    actual: "Patty" ,
    expected:(2) [...],
    note: "Refer to the person, rather than the disability, first."
    }]},
    {
    Tommy:(1) [
    {
    message: "`Tommy` may be insensitive, use `Thomas` instead" ,
    name: "1:2-1:7" ,
    reason: "`Tommy` may be insensitive, use `Patrick` instead" ,
    line: 1 ,
    column: 2 ,
    location: {...},
    source: "retext-SIID-SSID" ,
    ruleId: "Test-2" ,
    fatal: false ,
    actual: "Tommy" ,
    expected:(1) [...],
    note: "Refer to the person, rather than the disability, first."
    }]
}] */





const width = 932; 
const height = width;
const format = d3.format(",d");

export default class BubbleChart {
    constructor(element){
        const pack = data => d3.pack()
                                .size([width - 2, height - 2])
                                .padding(3)
                                (d3.hierarchy({children: data}).sum(d => d.value));
        const root = pack(data);
        const color = d3.scaleOrdinal(data.map(d => d.group), d3.schemeCategory10);
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
            .attr("fill", d => color(d.data.group));
      
        leaf.append("clipPath")
            //.attr("id", d => (d.clipUid = DOM.uid("clip")).id)
              .attr("id", (d,i) => (d.clipUid = i))
          .append("use")
            .attr("xlink:href", d => d.leafUid.href);
      
        leaf.append("text")
            .attr("clip-path", d => d.clipUid)
          .selectAll("tspan")
          .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
          .join("tspan")
            .attr("x", 0)
            .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
            .text(d => d);
      
        leaf.append("title")
            .text(d => `${d.data.title}\n${format(d.value)}`);
          
        return svg.node();
      
    }
}