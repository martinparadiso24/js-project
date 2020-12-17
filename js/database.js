// Definición de objeto Product
class Product {
  constructor(id, name, price, stock, img, quantity){
    this.id = id;  
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.img = img;
    this.quantity = quantity;
  }
}

// Creo array de objetos y recorro Database
function GetProducts(){
  let productsAsObjects = JSON.parse(DATA);
  let productArray = new Array;
  for(element of productsAsObjects){
    let addproduct = new Product(element.id, element.name, element.price, element.stock, element.img);
    productArray.push(addproduct);
  };
  return productArray;
}

const DATA = `[{
  "id": 1,
  "name": "Bitcoin",
  "price": 19368.76,
  "stock": 460,
  "img": "https://www.cryptocompare.com/media/19633/btc.png"
}, {
  "id": 2,
  "name": "Ethereum",
  "price": 589.43,
  "stock": 565,
  "img": "https://icanmining.ru/images/coins/ETH.png"
}, {
  "id": 3,
  "name": "Litecoin",
  "price": 83.12,
  "stock": 544,
  "img": "https://seeklogo.com/images/L/litecoin-logo-09A62FE1FB-seeklogo.com.png"
}, {
  "id": 4,
  "name": "XRP",
  "price": 0.5014,
  "stock": 543,
  "img": "https://corindex.com/img/crypto_coins/XRP.png"
}, {
  "id": 5,
  "name": "Monero",
  "price": 154.88,
  "stock": 914,
  "img": "https://criptomoneda.ninja/imagenes/xmr.png"
}, {
  "id": 6,
  "name": "USD Tether",
  "price": 1,
  "stock": 558,
  "img": "https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png"
}, {
  "id": 7,
  "name": "Chainlink",
  "price": 12.78,
  "stock": 994,
  "img": "https://criptomoneda.ninja/imagenes/link.png"
}, {
  "id": 8,
  "name": "Cardano",
  "price": 0.158,
  "stock": 938,
  "img": "https://www.worldcryptoindex.com/wp-content/uploads/2018/01/cardano-logo-300.jpg"
}, {
  "id": 9,
  "name": "Stellar",
  "price": 0.1721,
  "stock": 612,
  "img": "https://stealthex.io/db-assets/coins/icons/color/8laQ7QbGctJIdKLm.svg"
}, {
  "id": 10,
  "name": "EOS",
  "price": 2.87,
  "stock": 213,
  "img": "https://corindex.com/img/crypto_coins/EOS.png"
}]`;