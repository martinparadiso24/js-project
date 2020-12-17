// Carrito

var cart = [];
var shoppingCart = document.getElementById('shoppingCart');

// Traigo datos a la variable
var products = GetProducts();

// Recupero el DIV
const productsContainer = document.getElementById('productsContainer');

// Recorro products y creo cards
products.forEach(product => {
    let productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
});

// Funcion  cards
function createProductCard(product) {
    let productCard = document.createElement('div');
    productCard.id = product.id;
    productCard.classList = "productCard pt-2 pb-2 column is-one-third";

    // Agrego DIVs hijos de nombre y precio

    let img = document.createElement('img');
    img.src = product.img;
    productCard.appendChild(img);

    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = product.name;
    productCard.appendChild(nameDiv);
    
    let priceDiv = document.createElement('div');
    priceDiv.innerHTML = "El precio es $" + product.price;
    productCard.appendChild(priceDiv);

    let stockDiv = document.createElement('div');
    stockDiv.innerHTML = "La cantidad disponible es de: " + product.stock;
    productCard.appendChild(stockDiv);

    // agregar al carrito
    let botonAgregarAlCarrito = document.createElement('button');
    botonAgregarAlCarrito.classList = 'button is-light agregarCarrito';
    botonAgregarAlCarrito.innerHTML = "Agregar al Carrito";
    productCard.appendChild(botonAgregarAlCarrito);

    botonAgregarAlCarrito.addEventListener('click', () =>{
        var cantidadProducto = parseInt(prompt('Que cantidad desea agregar?'));
        if(cantidadProducto <= product.stock){
        agregarAlCarrito(product, cantidadProducto);
        }
        else{alert('La cantidad ingresada supera al stock, prueba de nuevo')};
    });
    return productCard;
};

// Funcion agregar al carrito con nuevo JSON
function agregarAlCarrito(product, cantidadProducto){
    let productCart = product;
    productCart.quantity = cantidadProducto;
    cart.push(productCart);
    localStorage.setItem('cart', JSON.stringify(cart));
};

getProductsFromLocalStorage();

// Traer elementos del Local
function getProductsFromLocalStorage(){
    let cartFromLocalStorage = localStorage.getItem('cart');
    var mostrarCart = [];
    if(cartFromLocalStorage){
        let cartStringToObject = JSON.parse(cartFromLocalStorage);
        cartStringToObject.forEach(element => {
            let productToCart = new Product(element.id, element.name, element.price, element.stock, element.img, element.quantity);
            mostrarCart.push(productToCart);
            });
        addProductToPage(mostrarCart);
    }
    else{
        console.log('No hay carrito');
    };
};

// Agregar producto a carrito de pagina
function addProductToPage(mostrarCart){
    var valorTotalDeCarrito = 0;

    mostrarCart.forEach(element =>{
        let crearLi = document.createElement('li');
        crearLi.innerHTML = element.name + '. cantidad: ' + element.quantity + ', precio unitario: $' + element.price;  
            shoppingCart.appendChild(crearLi);

        valorTotalDeCarrito = valorTotalDeCarrito + element.price * element.quantity;
        });

    var valorTotal = document.getElementById('valorTotal');
    valorTotal.innerHTML = 'Importe total: $' + valorTotalDeCarrito;
}

// boton vaciar con Jquery
$('#buttonVaciarCarrito').click(function(){
    localStorage.clear();
    alert('Por favor reinicia la pagina');
});

// boton comprar con Jquery
$('#buttonComprar').click(function(){
    alert('Compra aceptada! redirigiendo a la pasarela de pago');
    localStorage.clear();
});