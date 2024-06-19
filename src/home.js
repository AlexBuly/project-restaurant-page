import Image from './icecream.jpeg';
import print from './sepFunc';

const Home = () => {
    const content = document.querySelector("#content");
    const br = "<br>";

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-container");
    content.appendChild(homeDiv);

    const homeTitle = document.createElement("h1");
    homeTitle.classList.add("title");
    homeTitle.textContent = "I Scream Ice Cream";
    homeDiv.appendChild(homeTitle);
    
    const image = document.createElement("img");
    image.src = Image;
    homeDiv.appendChild(image);

    const info = document.createElement("p");
    info.classList.add("restaurant-info");
    info.textContent = "I Scream Ice Cream has the best ice cream around.";
    homeDiv.appendChild(info); 
 
   const hours = document.createElement("div");
   hours.classList.add("restaurant-hours");
   homeDiv.appendChild(hours);

   const hoursTitle = document.createElement("h3");
   hoursTitle.classList.add("hours-title");
   hoursTitle.textContent = "Hours:"
   hours.appendChild(hoursTitle);
  
   const hoursText = document.createElement("div");
   hoursText.classList.add("hours-text");
   hours.appendChild(hoursText);

   const days = document.createElement("div");
   days.classList.add("days");
   hoursText.appendChild(days);

   const daysArr = ["Mon-Fri: 8am-8pm", "Sat-Sun: 1pm-8pm"];
   print(daysArr, br, days);


   const location = document.createElement("div");
   location.classList.add("restaurant-location");
   homeDiv.appendChild(location);

   const locationTitle = document.createElement("h3");
   locationTitle.classList.add("location-title");
   locationTitle.textContent = "Location:";
   location.appendChild(locationTitle);

   const locationText = document.createElement("div");
   locationText.classList.add("location-text");
   location.appendChild(locationText);

   const locationArr = ["123 Example Steet", "Liman, West Virginia 23446"];
   print(locationArr, br, locationText);

    return Home;   
}

export default Home;