import Image from './icecream.jpeg';

const home = () => {
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

    const hours = document.createElement("h3");
    hours.classList.add("restaurant-hours");
    hours.textContent = "Hours";
    content.appendChild(hours);

    const location = document.createElement("h3");
    location.classList.add("restaurant-location");
    location.textContent = "Location";
    content.appendChild(location);


    
    return home;
    
}

export default home;