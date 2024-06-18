import print from "./sepFunc";

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
    menu.appendChild(flavors);

    const flavorsTitle = document.createElement("h3");
    flavorsTitle.textContent = "Flavors";
    flavors.appendChild(flavorsTitle);

    const flavorsList = document.createElement("p");
    flavors.appendChild(flavorsList);

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

    const sorbetsTitle = document.createElement("h3");
    sorbetsTitle.textContent = "Sorbet";
    flavors.appendChild(sorbetsTitle);

    const sorbets = document.createElement("p");
    flavors.appendChild(sorbets);
    const sorbetArr = ["Mango", "Raspberry", "Lemon", "Pineapple Coconut"];
    print(sorbetArr, br, sorbets);

    const icecreamPrice = document.createElement("h3");
    icecreamPrice.textContent = "Ice Cream and Sorbet Prices";
    flavors.appendChild(icecreamPrice);
    const cones = document.createElement("p");
    flavors.appendChild(cones);
    const conesArr = ["Single - $3.00", "Double - $5.00", "Triple - $6.50"];
    print(conesArr, br, cones);

    const milkshakes = document.createElement("div");
    milkshakes.classList.add("milkshakes");
    menu.appendChild(milkshakes);

    const milkshakeTitle = document.createElement("h3");
    milkshakeTitle.textContent = "Milkshakes";
    milkshakes.appendChild(milkshakeTitle); 

    const shakeList = document.createElement("p");
    milkshakes.appendChild(shakeList);

    const shakesArr = ["Classic Vanilla - $5.50", 
                        "Chocolate Dream - $5.50",
                        "Strawberry Bliss - $5.50",
                        "Oreo Crumble - $6.00",
                        "Peanut Butter Cup - $6.00",
                        "Salted Caramel Pretzel - $6.50",
                    ]
    print(shakesArr, br, shakeList);

    const icecreamSandwiches = document.createElement("div");
    icecreamSandwiches.classList.add("ice-cream-sandwiches");
    menu.appendChild(icecreamSandwiches);

    const sandwichTitle = document.createElement("h3");
    sandwichTitle.textContent = "Ice Cream Sandwiches - $5.00";
    icecreamSandwiches.appendChild(sandwichTitle);

    const sandwichList = document.createElement("p");
    icecreamSandwiches.appendChild(sandwichList);

    const sandwichArr = ["Chocolate Chip Cookie Sandwich", "Double Chocolate Sandwich", "Snickerdoodle Sandwich"];
    print(sandwichArr, br, sandwichList);

    const toppings = document.createElement("div");
    toppings.classList.add("toppings");
    menu.appendChild(toppings);

    const toppingsTitle = document.createElement("h3");
    toppingsTitle.textContent = "Toppings";
    toppings.appendChild(toppingsTitle);

    const toppingsList = document.createElement("p");
    toppings.appendChild(toppingsList);

    const toppingsArr = ["Sprinkles - $0.50",
                         "Hot Fudge - $0.75",
                         "Caramel Sauce - $0.75",
                         "Whipped Cream - $0.50",
                         "Nuts: $0.75",
                         "Fresh Fruit - $1.00",
                         "Cookie Crumbs - $0.50",
                         "Gummy Bears - $0.75",
                         "Marshmallows - $0.50"
                        ]
    print(toppingsArr, br, toppingsList);

    const drinks = document.createElement("div");
    drinks.classList.add("drinks");
    menu.appendChild(drinks);

    const drinksTitle = document.createElement("h3");
    drinksTitle.textContent = "Drinks";
    drinks.appendChild(drinksTitle);

    const drinskList = document.createElement("p");
    drinks.appendChild(drinskList);

    const drinksArr = ["Cold Brew Coffee Float - $5.50",
                       "Affogato - $4.50",
                       "Root Beer Float - $5.00",
                       "Italian Soda - $4.00",
                    ]
    print(drinksArr, br, drinskList);

    const kidsMenu = document.createElement("div");
    kidsMenu.classList.add("kids-menu");
    menu.appendChild(kidsMenu);

    const kidsTitle = document.createElement("h3");
    kidsTitle.textContent = "Kids' Menu";
    kidsMenu.appendChild(kidsTitle);

    const kidsList = document.createElement("p");
    kidsMenu.appendChild(kidsList);

    const kidsArr = ["Mini Cones - $2.50", "Sprinkle Sundae - $4.00", "Ice Cream Cupcake - $3.50", ];
    print(kidsArr, br, kidsList);
}


export default Menu;