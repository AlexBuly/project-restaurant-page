import print from "./sepFunc";

const Contact = () => {
    const content = document.querySelector("#content");
    const br = "<br>"

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-container");
    content.appendChild(contactDiv);

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("title");
    contactTitle.textContent = "Contact";
    contactDiv.appendChild(contactTitle);

    const people = document.createElement("div");
    people.classList.add("persons");
    contactDiv.appendChild(people);

    const person1Title = document.createElement("h4");
    person1Title.textContent = "John Smith";
    people.appendChild(person1Title);

    const person1 = document.createElement("p");
    people.appendChild(person1);

    const person1Arr = ["Manager", "123-456-7890", "name@example.com"];
    print(person1Arr, br, person1);

    const person2Title = document.createElement("h4");
    person2Title.textContent = "Elaine Brown";
    people.appendChild(person2Title);

    const person2 = document.createElement("p");
    people.appendChild(person2);

    const person2Arr = ["Employee", "003-112-5673", "brown@email.com"];
    print(person2Arr, br, person2);

    const person3Title = document.createElement("h4");
    person3Title.textContent = "Gary Nelson";
    people.appendChild(person3Title);

    const person3 = document.createElement("p");
    people.appendChild(person3);

    const person3Arr = ["Employee", "114-556-9932", "nel@example.com"];
    print(person3Arr, br, person3);
}

export default Contact;