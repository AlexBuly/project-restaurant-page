import _ from 'lodash';
import './style.css';
import Home from './home.js';
import Footer from './footer.js';
import Menu from './menu.js';
import Contact from './contact.js';

Home();
Menu();
Contact();
Footer();

const onLoad = () => {
    document.querySelector(".home-container").style.display = "flex";
    document.querySelector(".menu-container").style.display = "none";
    document.querySelector(".contact-container").style.display = "none";
}

const switchEvents = () => {
    const homeBtn = document.querySelector(".home").addEventListener("click", onLoad);

    const menuBtn = document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector(".home-container").style.display = "none";
        document.querySelector(".menu-container").style.display = "flex";
        document.querySelector(".contact-container").style.display = "none";
    });

    const contactBtn = document.querySelector(".contact").addEventListener("click", () => {
        document.querySelector(".home-container").style.display = "none";
        document.querySelector(".menu-container").style.display = "none";
        document.querySelector(".contact-container").style.display = "flex";
    });


}

onLoad();
switchEvents()