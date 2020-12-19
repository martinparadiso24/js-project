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
    productCard.classList = "productCard card p-2 m-3";

    // Agrego DIVs hijos de nombre y precio

    let img = document.createElement('img');
    img.src = product.img;
    img.classList = 'card-header card-image is-centered';
    productCard.appendChild(img);

    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = product.name;
    nameDiv.classList = 'is-flex is-justify-content-center subtitle is-3 pt-4';
    productCard.appendChild(nameDiv);
    
    let priceDiv = document.createElement('div');
    priceDiv.innerHTML = "Precio unitario: $" + product.price;
    productCard.appendChild(priceDiv);

    let stockDiv = document.createElement('div');
    stockDiv.innerHTML = product.stock;
    productCard.appendChild(stockDiv);
    

    let cantidadP = document.createElement('div');
    cantidadP.innerHTML = 'Unidades disponibles';
    productCard.appendChild(cantidadP);
    

    

    // Form Div
    let quantDiv = document.createElement('div');

    let formQ = document.createElement('form');

    let inputQ = document.createElement('input');
    inputQ.type = 'number';
    inputQ.step = '1';
    inputQ.min = '1';
    inputQ.max = '1000';
    inputQ.oninput = function(){
        if(inputQ.value < 0){
            alert('el numero no puede ser negativo!');
            inputQ.value = ''; 
        }
    };

    // Submit Button
    let submitQ = document.createElement('input');
    submitQ.type = 'submit';
    submitQ.value = 'Agregar al Carrito';
    submitQ.classList = 'button';

    let resetQ = document.createElement('input');
    resetQ.type = 'reset';
    resetQ.value = 'Borrar';
    resetQ.classList = 'button';

    quantDiv.style.length = '100px';
    quantDiv.style.height = '40px';

    formQ.appendChild(inputQ);
    formQ.appendChild(submitQ);
    formQ.appendChild(resetQ);

    quantDiv.appendChild(formQ);
    productCard.appendChild(quantDiv);


    // Agregar al carrito desde el Form
    let stockcount = product.stock;

    $(submitQ).click(function(){
        if(inputQ.value <= stockcount){
            agregarAlCarrito(product, inputQ.value);
            console.log(inputQ.value + ' ' + product.name + ' han sido agregados al carrito');
            stockcount = stockcount - inputQ.value;
            stockDiv.innerHTML = stockcount;
        }
        else{
            alert('La cantidad ingresada supera al stock');
        };

        return false;
    });



    return productCard;
};