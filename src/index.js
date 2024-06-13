import _ from 'lodash';
import './style.css';
import Image from './icecream.jpeg';


const home = () => {
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    image.src = Image;
    content.appendChild(image);
    return home;
 }

home();

console.log('Webpack is working');