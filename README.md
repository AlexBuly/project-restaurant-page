# project-restaurant-page

This is project restaurant page. In this project, JavaScript was used to generate the entire
website using DOM manipulation and webpack. 

First, a package.json file was generated. Then, webpack along with node_modules were installed. 
The HTML document was generated with webpack along with the main JavaScript file, index.js. 

Next, header, nav, and footer elements were added to the HTML document. A div with an id of content was also added. The nav element include buttons to link to different different site components. 

The website includes 3 pages: home, menu, and contact page. Each page is included in function in a seperate JS module and imported into index.js.Each function adds a div to the DOM and also includes several divs within that main div. 

Finally, logic was added to switch between pages. This is done by calling all three functions in index.js and only showing the corresponding div when clicking each button. 