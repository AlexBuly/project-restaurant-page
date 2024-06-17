function print(array, seperator, element) {
    let text = array.join(seperator);
    element.innerHTML = text;
}

export default print;
