// common sheared function
function getProductName(productId) {
    const productName = document.getElementById(productId);
    const productIdText = productName.innerText;
    return productIdText;
}
// common product price function
function getProductPrice(productPrice) {
    const productMoney = document.getElementById(productPrice);
    const productMoneyText = productMoney.innerText;
    const productRealPrice = parseFloat(productMoneyText);
    return productRealPrice;
}
// set the innertext of the total price
function setElementText(elementId, elemnetValue) {
    const element = document.getElementById(elementId);
    element.innerText = elemnetValue;
}

// add products to the cart
function addNametoCart(productName) {
    // get the element were to add
    const productEntry = document.getElementById('added-items');
    const count = productEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-2xl', 'font-medium');
    p.innerHTML = `${count + 1}. ${productName}`;
    // add to the div
    productEntry.appendChild(p);
}

// parchese btn enable
function btnEnabled(price) {
    const parcheseBtn = document.getElementById('make-purchase-btn');
    if (price > 0) {
        parcheseBtn.removeAttribute('disabled');
    }
    else {
        parcheseBtn.setAttribute('disabled');
    }
}
