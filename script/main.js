// step-1 : get the id names 
document.getElementById('card1').addEventListener('click', function () {
    const cardPrice1 = document.getElementById('spone-price');
    const sponePrice = parseInt(cardPrice1.innerText);
    console.log(sponePrice);
    getElemtsByIdName('spone');

})