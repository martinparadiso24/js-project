// Ver carrito

let cartContainer = document.getElementById('cartContainer');
let cartButton = document.getElementById('cartButton');

$('#cartButton').click( () => {
    cartContainer.style.display = 'flex';
});

$('#hideCartButton').click( () => {
    cartContainer.style.display = 'none';
});

// Carrito de compras

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