const Footer = () => {
    const footer = document.querySelector(".footer");

    const copyright = document.createElement("p");
    copyright.innerHTML = "\xa9";
    footer.appendChild(copyright);

    const date = new Date();
    let year = date.getFullYear();

    const currYear = document.createElement("p");
    currYear.textContent = year;
    footer.appendChild(currYear);
}

export default Footer;