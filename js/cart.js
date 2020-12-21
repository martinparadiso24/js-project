// Inicio carrito
var cart = [];

// Carrito desde Local al iniciar
$(document).ready(function(){
    if (localStorage.getItem("cart") != null) {
        var cartToArray = JSON.parse(localStorage.getItem('cart'));
        cartToArray.forEach(element => {
            cart.push(element); 
            }
        );
        updatePageCart();
    };
});

// agregar productos al array
function agregarAlCarrito(producto, cantidad){
    let productoParaElCarrito = producto;
    let intCantidad = parseInt(cantidad);

    if (Array.isArray(cart) && cart.length){
        // array existe y no es vacio
        if(cart.includes(productoParaElCarrito)){
            let hola = cart.indexOf(productoParaElCarrito);
            cart[hola].quantity = (cart[hola].quantity + intCantidad);
            updatePageCart();
        }
        else {
            productoParaElCarrito.quantity = intCantidad;
            cart.push(productoParaElCarrito);
            updatePageCart();
        }

    }
    else{
        productoParaElCarrito.quantity = intCantidad;
        cart.push(productoParaElCarrito);
        updatePageCart();
    };

    // Guardar en LocalStorage

    let localCart = JSON.stringify(cart);
    localStorage.setItem('cart', localCart);

};

// Actualizar carrito cuando se agregan productos
function updatePageCart(){
    $('#shoppingCart').empty();
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
        location.reload();
        return false;
    });

    // boton comprar con Jquery
    $('#buttonComprar').click(function(){
        $('#buyoutContainer').empty();
        let buyoutContainer = document.getElementById('buyoutContainer');
        let buyTotal = 0;

        cart.forEach(element => {
            let calc = (element.price * element.quantity);
            buyTotal = buyTotal + calc;
        });

        let totalRounded = Math.round(buyTotal);

        let priceContainer = document.createElement('div');
        priceContainer.classList = 'm-3 p-3 has-text-black';
        priceContainer.innerHTML = 'El total es de $' + totalRounded;

        let buyButton = document.createElement('button');
        buyButton.innerHTML = "Finalizar Compra";
        buyButton.classList = "button mt-4";
        $(buyButton).click( ()=> {
            $('#buyoutContainer').empty();
            $('#shoppingCart').empty();
            localStorage.clear();
            cart = [];
            alert('Gracias por tu Compra! Redirigiendo a pasarela de pago...');
            return false;
        });
       
        buyoutContainer.appendChild(priceContainer);
        buyoutContainer.appendChild(buyButton);
        buyoutContainer.style.display = 'flex';
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