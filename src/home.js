import Image from './icecream.jpeg';

const Home = () => {
    const content = document.querySelector("#content");

    const homeTitle = document.createElement("h1");
    homeTitle.classList.add("title");
    homeTitle.textContent = "I Scream Ice Cream";
    content.appendChild(homeTitle);
    
    const image = document.createElement("img");
    image.src = Image;
    content.appendChild(image);

    const info = document.createElement("p");
    info.classList.add("restaurant-info");
    info.textContent = "I Scream Ice Cream has the best ice cream around.";
    content.appendChild(info); 
 
   const hours = document.createElement("div");
   hours.classList.add("restaurant-hours");
   content.appendChild(hours);

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

   const weekdays = document.createElement("div");
   weekdays.classList.add("weekdays");
   weekdays.textContent = "Mon-Fri:";
   days.appendChild(weekdays);

   const weekends = document.createElement("div");
   weekends.classList.add("weekends")
   weekends.textContent = "Sat-Sun:";
   days.appendChild(weekends);

   const times = document.createElement("div");
   times.classList.add("times");
   hoursText.appendChild(times);

   const timesWeekday = document.createElement("div");
   timesWeekday.textContent = "8am-8pm";
   times.appendChild(timesWeekday);

   const timesWeekends = document.createElement("div");
   timesWeekends.textContent = "1pm-8pm";
   times.appendChild(timesWeekends);

   const location = document.createElement("div");
   location.classList.add("restaurant-location");
   content.appendChild(location);

   const locationTitle = document.createElement("h3");
   locationTitle.classList.add("location-title");
   locationTitle.textContent = "Location:";
   location.appendChild(locationTitle);

   const locationText = document.createElement("div");
   locationText.classList.add("location-text");
   location.appendChild(locationText);

   const street = document.createElement("p");
   street.textContent = "123 Example Street";
   locationText.appendChild(street);
   const city = document.createElement("p");
   city.textContent = "Liman, West Virginia 23446";
   locationText.appendChild(city);

    return Home;   
}

export default Home;