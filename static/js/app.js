// Use the D3 library to read in `samples.json` from the URL

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
});


var jsData;

function init(){
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then((data) =>{
    jsData = data;
        var subjectID = data.names;
        subjectID.forEach((ID) => {
            selector
            .append('option')
            .text(ID)
            .property('value', ID);
        });
    const firstbutton = subjectID[0];
    updateCharts(firstbutton);
    updateMetadata(firstbutton);
    });
}

function updateCharts(sample) {    
    d3.json("data/samples.json").then((data) => {
    var samples = data.samples;
    var filterArray = samples.filter(sampleObject => sampleObject.id == sample);
    var result = filterArray[0];
    var sample_values = result.sample_values;
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;   
    var trace1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
        size: sample_values,
        color: otu_ids,
        colorscale:"Electric"
        }
    };
    var data = [trace1];
    var layout = {
        showlegend: false,
        hovermode: 'closest',
        xaxis: {title:"OTU ID "},
        font: { color: "#1d49a8", family: "Arial, Helvetica, sans-serif" },
        margin: {t:30}
    };
    Plotly.newPlot('bubble', data, layout); 
    var trace1 = {
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        name: "Greek",
        type: "bar",
        orientation: "h"
    };
    var data = [trace1];
    var layout = {
        margin: {l: 100, r: 100, t: 100, b: 100},
        font: { color: "#1d49a8", family: "Arial, Helvetica, sans-serif" }
    };
    Plotly.newPlot("bar", data, layout);  
    });
}

function updateMetadata(sample) {
    d3.json("data/samples.json").then((data) => {
        var metadata = data.metadata;
        var filterArray = metadata.filter(sampleObject => sampleObject.id == sample);
        var result = filterArray[0];
        var metaPanel = d3.select("#sample-metadata");
        metaPanel.html("");
        Object.entries(result).forEach(([key, value]) => {
            metaPanel.append("h6").text(`${key.toUpperCase()}: ${value}`)
        })

    var data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            marker:{size:28,color:'850000'},
            value: result.wfreq,
            title: { text: "Belly Button Washing frequency" },
            type: "indicator",
            gauge: {axis:{visible:true, range:[0,9]}},
            mode: "gauge+number"
        }
    ];
    
    var layout = { width: 600, height: 500, margin: { t: 100, b: 100 }, line:{color:'600000'}, font:{color: '#1d49a8'} };


    
    Plotly.newPlot("gauge", data, layout);
    });
}

function optionChanged(newSample) {
    updateMetadata(newSample);
    updateCharts(newSample);
}

init();