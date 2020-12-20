// Carrito
var cart = [];

// agregar productos al array
function agregarAlCarrito(producto, cantidad){
    let productoParaElCarrito = producto;
    let intCantidad = parseInt(cantidad);
    
    if (Array.isArray(cart) && cart.length){
        // array exists and is not empty
        cart.forEach(element => {
            if (element.name == productoParaElCarrito.name){
                element.quantity = (element.quantity + intCantidad);
                console.log('Cantidad de producto actualizada');
                updatePageCart();
            }
            else{
                productoParaElCarrito.quantity = intCantidad;
                cart.push(productoParaElCarrito);
                console.log('Producto agregado al carrito');
                addItemToPageCart();
            }
        });
    }
    else{
        productoParaElCarrito.quantity = intCantidad;
        cart.push(productoParaElCarrito);
        console.log('Producto agregado al carrito');
        addItemToPageCart();
    };

};

// Actualizar carrito cuando se agregan productos
function addItemToPageCart(){

    // Recorro Carrito
    cart.forEach(product => {

        let cartItemContainer = document.createElement('li');
        cartItemContainer.classList = 'cartItemContainer is-flex justify-content-center';

        let cartItemImg = document.createElement('img');
        cartItemImg.src = product.img;
        cartItemImg.style.height = '50px';
        cartItemImg.style.width = '50px';

        let cartItem = document.createElement('div');

        let cartItemName = document.createElement('div');
        cartItemName.innerHTML = product.name;
        cartItemName.classList = 'has-background-success has-text-light';

        let cartItemPrice = document.createElement('div');
        cartItemPrice.innerHTML = ('$' + product.price);

        let cartItemQ = document.createElement('div');
        cartItemQ.innerHTML = (product.quantity + ' unidades');
        cartItemQ.classList = 'has-text-light has-background-dark';

        
        cartItem.appendChild(cartItemPrice);
        cartItem.appendChild(cartItemQ);
        cartItemContainer.appendChild(cartItemName);
        cartItemContainer.appendChild(cartItemImg);
        cartItemContainer.appendChild(cartItem);
        $('#shoppingCart').append(cartItemContainer);
    });
};




// Botones de carrito de compras

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

    // botones Ver y esconder Carrito  
    let cartContainer = document.getElementById('cartContainer');
    let cartButton = document.getElementById('cartButton');


    $('#cartButton').click( () => {
    cartContainer.style.display = 'flex';
    });

    $('#hideCartButton').click( () => {
    cartContainer.style.display = 'none';
    });