const products = [
    { name: "Producto 1", price: 10, stock: 5 },
    { name: "Producto 2", price: 20, stock: 3 },
    { name: "Producto 3", price: 30, stock: 4 },
];


let cart = [];


function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <span>${product.name} - ${product.price} € (Stock: ${product.stock})</span>
            <button onclick="addToCart(${index})">Agregar al carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}


function addToCart(index) {
    const product = products[index];

    
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        if (existingProduct.quantity < product.stock) {
            existingProduct.quantity++;
        } else {
            alert('No hay suficiente stock de este producto.');
            return;
        }
    } else {
        if (product.stock > 0) {
            cart.push({ name: product.name, price: product.price, quantity: 1 });
        } else {
            alert('No hay suficiente stock de este producto.');
            return;
        }
    }

    updateCart();
}


function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        const subtotal = item.price * item.quantity;
        total += subtotal;
        itemDiv.innerHTML = ${item.name} - ${item.quantity} x ${item.price} € = ${subtotal} €;
        cartDiv.appendChild(itemDiv);
    });

    document.getElementById('total').innerText = total.toFixed(2);
}


displayProducts();
