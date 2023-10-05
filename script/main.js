// step-1 : get the id names 
document.getElementById('card1').addEventListener('click', function () {
    const cardName1 = document.getElementById('spones');
    const cardPrice1 = document.getElementById('spone-price');
    const sponePrice = parseInt(cardPrice1.innerText);
    console.log(sponePrice);
})

document.getElementById('card2').addEventListener('click', function () {
    const cardName2 = document.getElementById('Accessories');
    const cardPrice2 = document.getElementById('Accessories-price');
    const accessoriesPrice = parseInt(cardPrice2.innerText);
})

document.getElementById('card3').addEventListener('click', function () {
    const cardName3 = document.getElementById('home-cooker');
    const cardPrice3 = document.getElementById('home-cooker-price');
    const cookerPrice = parseInt(cardPrice3.innerText);
})
document.getElementById('card4').addEventListener('click', function () {
    const cardName4 = document.getElementById('sports-cap');
    const cardPrice4 = document.getElementById('sports-cap-price');
    const capPrice = parseInt(cardPrice4.innerText);
})
document.getElementById('card5').addEventListener('click', function () {
    const cardName5 = document.getElementById('jersey-set');
    const cardPrice5 = document.getElementById('jersey-set-price');
    const jerseyPrice = parseInt(cardPrice5.innerText);
})
document.getElementById('card6').addEventListener('click', function () {
    const cardName6 = document.getElementById('cates');
    const cardPrice6 = document.getElementById('cates-price');
    const catesPrice = parseInt(cardPrice6.innerText);




})
// get the cuppon code
