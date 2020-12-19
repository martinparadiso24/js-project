// Carrito
var cart = [];

// Funcion para boton agregar al Carrito
function agregarAlCarrito(producto, cantidad){
    let productoParaElCarrito = producto;
    
    if (Array.isArray(cart) && cart.length){
        // array exists and is not empty
        cart.forEach(element => {
            if (element.name == productoParaElCarrito.name){
                element.quantity = (element.quantity + cantidad);
                console.log('Cantidad de producto actualizada');
            }
            else{
                productoParaElCarrito.quantity = cantidad;
                cart.push(productoParaElCarrito);
                console.log('Producto agregado al carrito');
            }
        });
    }
    else{
        productoParaElCarrito.quantity = cantidad;
        cart.push(productoParaElCarrito);
        console.log('Producto agregado al carrito');
    };
    updatePageCart();
};

// Actualizar carrito cuando se agregan productos
function updatePageCart(producto){

    $('shoppingCart').empty();
    cart.forEach(product => {
        // TERMINAR ESTOOOOO
    });
};


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

    


    // boton vaciar con Jquery
    $('#buttonVaciarCarrito').click(function(){
        localStorage.clear();
        $('#shoppingCart').empty();
    });

    // boton comprar con Jquery
    $('#buttonComprar').click(function(){
        alert('Compra aceptada! redirigiendo a la pasarela de pago');
        localStorage.clear();
    });