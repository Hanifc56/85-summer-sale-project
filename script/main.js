
// product 1
function getProductName1() {
    const firstPoduct = getProductName('spones');
    const firstPoductPrice = getProductPrice('spone-price');
    // now get the total price
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = firstPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(firstPoduct);
}

// product 2

function getProductName2() {
    const secondPoduct = getProductName('Accessories');
    const secondPoductPrice = getProductPrice('Accessories-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = secondPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(secondPoduct);
}

// product 3

function getProductName3() {
    const thirdPoduct = getProductName('home-cooker');
    const thirdPoductPrice = getProductPrice('home-cooker-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = thirdPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(thirdPoduct);
}

// product 4

function getProductName4() {
    const fothPoduct = getProductName('back-cap');
    const fothPoductPrice = getProductPrice('back-cap-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = fothPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(fothPoduct);
}

// product 5

function getProductName5() {
    const fifthPoduct = getProductName('jersey-set');
    const fifthPoductPrice = getProductPrice('jersey-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = fifthPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(fifthPoduct);
}

// product 6

function getProductName6() {
    const sixthPoduct = getProductName('cates');
    const sixthPoductPrice = getProductPrice('cates-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = sixthPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(sixthPoduct);
}

