# Interactive-Web-Visualizations-Challenge
Step 1:
I used the D3 library to read in the json file from the URL, and verified on the console that the data was there.

Step2:

- Horizontal bar chart:

I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual.

  * Use `sample_values` as the values for the bar chart.

  * Use `otu_ids` as the labels for the bar chart.

  * Use `otu_labels` as the hovertext for the chart.


- Bubble chart

Next, I was able to create a buble chart which displays each sample doing the following:

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.
  
4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all the plots when a new sample is selected.

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

##Advanced Challenge Assignment

This part of the HW was a bit challenging because I wasn't able to create the exact Gauge Chart that was required. I adapted a gauche from <https://plot.ly/javascript/gauge-charts/> and made some changes to try and create a nice looking chart but it didn't match the criteria.
