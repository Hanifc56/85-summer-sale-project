
// product 1
function getProductName1() {
    const firstPoduct = getProductName('spones');
    const firstPoductPrice = getProductPrice('spone-price');
    // now get the total price
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = firstPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    // get the product in the cart
    addNametoCart(firstPoduct);
    cuponBtnApply();
}

// product 2

function getProductName2() {
    const secondPoduct = getProductName('Accessories');
    const secondPoductPrice = getProductPrice('Accessories-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = secondPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(secondPoduct);
    cuponBtnApply();
}

// product 3

function getProductName3() {
    const thirdPoduct = getProductName('home-cooker');
    const thirdPoductPrice = getProductPrice('home-cooker-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = thirdPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(thirdPoduct);
    cuponBtnApply();
}

// product 4

function getProductName4() {
    const fothPoduct = getProductName('back-cap');
    const fothPoductPrice = getProductPrice('back-cap-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = fothPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(fothPoduct);
    cuponBtnApply();
}

// product 5

function getProductName5() {
    const fifthPoduct = getProductName('jersey-set');
    const fifthPoductPrice = getProductPrice('jersey-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = fifthPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(fifthPoduct);
    cuponBtnApply();
}

// product 6

function getProductName6() {
    const sixthPoduct = getProductName('cates');
    const sixthPoductPrice = getProductPrice('cates-price');
    const totalPrice = getProductPrice('total-price');
    const totalPriceToPay = sixthPoductPrice + totalPrice;
    setElementText('total-price', totalPriceToPay);
    addNametoCart(sixthPoduct);
    cuponBtnApply();
}
// apply cupon btn
function cuponBtnApply() {
    const applyBtn = document.getElementById('cupon-btn');
    const cuponInput = document.getElementById('cupon-input')
    const cuponText = cuponInput.value
    console.log(cuponText);
    cuponInput.value = '';
    const totalMoney = getProductPrice('total-price');
    const discount = getProductPrice('discounted-price');
    const totalPyment = getProductPrice('total-pyment');
    console.log(totalMoney, discount, totalPyment);
    if (totalMoney >= 200) {
        applyBtn.removeAttribute('disabled');

    }
    if (cuponText === 'SELL200') {
        const discountPrice = 20 / 100 * totalMoney.toFixed(2);
        setElementText('discounted-price', discountPrice.toFixed(2));
        const totalToPay = totalMoney - discountPrice;
        setElementText('total-pyment', totalToPay.toFixed(2));
        btnEnabled(totalMoney);

    }

}
// reset everything in cart
function clearCart() {
    setElementText('total-price', '0.00');
    setElementText('discounted-price', '0.00');
    setElementText('total-pyment', '0.00');
    const productEntry = document.getElementById('added-items');
    while (productEntry.firstChild) {
        productEntry.removeChild(productEntry.firstChild);
    }
}

