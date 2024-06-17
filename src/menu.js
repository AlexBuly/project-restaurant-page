const Menu = () => {
    const content = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");
    content.appendChild(menuDiv);

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("title");
    menuTitle.textContent = "Menu";
    menuDiv.appendChild(menuTitle);

    const menu = document.createElement("div");
    menu.classList.add("restaurant-menu");
    menuDiv.appendChild(menu);

    const flavors = document.createElement("div");
    flavors.classList.add("ice-cream-flavors");
    menuDiv.appendChild(flavors);

    const flavorsTitle = document.createElement("h3");
    flavorsTitle.classList.add("flavors-title");
    flavorsTitle.textContent = "Flavors";
    flavors.appendChild(flavorsTitle);

    const flavorsList = document.createElement("p");
    flavors.appendChild(flavorsList);

    function print(array, seperator, element) {
        let text = array.join(seperator);
        element.innerHTML = text;
    }

    const flavorsArray = ['Chocolate',
                        'Vanila',
                        'Strawberry',
                        'Cookies n\' Cream',
                        'Rocky Road',
                        'Pistachio',
                        'Mint Chocolate Chip',
                        'Rainbow',
                        'Birthday Cake',
                        'Lemon-Lime',
                        'Bananas',
                        'Cooke Dough',
                        'Peanut Butter Fudge',
                        'Caramel Fudge Swirl',
                        'Wild Cherry',
                        'Wild Berry',
                        'Toffee',
                        'Pineapple Upsidedown Cake',
                        'Orange Sherbet',
                        'Apple Pie',
                        'Butter Pecan',
                        'Cotton Candy',
                        'Peach Mago',
                        'Cookie Crumble',
                        'Gram Cracker',
                        'Green Apple',
                        'Pink Lemonade'
                        ]
    
    const br = "<br>";
    print(flavorsArray, br, flavorsList);

    const cones = document.createElement("p");
    flavors.appendChild(cones);
    const conesArr = ["Single - $3.00", "Double - $5.00", "Triple - $6.50"];
    print(conesArr, br, cones);

    const sorbetsTitle = document.createElement("h3");
    sorbetsTitle.textContent = "Sorbet";
    flavors.appendChild(sorbetsTitle);

    const sorbets = document.createElement("p");
    flavors.appendChild(sorbets);
    const sorbetArr = ["Mango", "Raspberry", "Lemon", "Pineapple Coconut"];
    print(sorbetArr, br, sorbets);
}


export default Menu;