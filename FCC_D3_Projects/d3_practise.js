document.getElementById("tester").innerHTML="<p>Hello World</p>";

//const myData = [[1, 100, "one"], [2, 101, "two"], [3, 102, "three"], [4, 103, "four"], [5, 104, "five"], [6, 105, "six"], [7, 106, "seven"], [8, 101, "eight"], [9, 109, "nine"], [10, 111, "ten"], [11, 103, "eleven"], [12, 105, "twelve"], [13, 110, "thirteen"], [14, 108, "fourteen"], [15, 107, "fifteen"], [16, 106, "sixteen"]];

//create svg area
const h = 350, w = 600;     //dimensions
const canvas = d3.select("body")
                 .append("svg")
                 .attr("width", w)
                 .attr("height", h)
                 .attr("id", "svgCanvas");

//request data                 
let  req=new XMLHttpRequest(), html = "";
req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
req.send();

//when data received, parse and draw chart
req.onload=function(){
    let json=JSON.parse(req.responseText);
    let myData=json.data;

    const barChart = canvas.selectAll("rect")
                   .data(myData)
                   .enter() 
                   .append("rect")
                   .attr("x", (d, i) => i * (w/myData.length))
                   .attr("y", (d) => h - d[1]/60)
                   .attr("height", (d) => d[1]/60)
                   .attr("width", w/myData.length - 1)
                   .attr("class", "bar")
                   .attr("data-date", (d) => d[0])
                   .attr("data-gdp", (d) => d[1])

                canvas.selectAll("text")
                   .data(myData)
                   .enter()
                   .append("text")
                   .text((d) => d[1])
                   .attr("y", (d) => h - d[1] - 20)
                   .attr("x", (d, i) => i * 30 + 7)
}




