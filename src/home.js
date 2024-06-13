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


    
    return home;
    
}

export default home;