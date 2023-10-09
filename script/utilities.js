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
// 
function addNametoCart(productName) {
    const addName = productIdText;
}