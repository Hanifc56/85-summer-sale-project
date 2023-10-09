function getElemtsByIdName(idName) {
    const nameOfId = document.getElementById(idName);
    const nameString = nameOfId.innerText;
    console.log(nameString);
}