const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const productDatailCloseIcon = document.querySelector('.product-datail-close');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-cotainer');
const datailProduct = document.querySelector('#productDatail');
const productDatailContainer = document.querySelector('#productDatail');


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartAside);
datailProduct.addEventListener('click',toggletDatail);
productDatailCloseIcon.addEventListener('click', closeProductDatailAside);



function toggletDatail() {
    datailProduct.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactve');
}

function toggleDesktopMenu() {
    datailProduct.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    datailProduct.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

}

function toggleCartAside() {
    datailProduct.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}

function openProductDatailAside() {
    productDatailContainer.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDatailAside() {
    productDatailContainer.classList.remove('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});

productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://www.profesionalreview.com/wp-content/uploads/2020/04/Qu%C3%A9-es-el-contraste-de-una-pantalla-03.jpg',

});

productList.push({
    name: 'Computador',
    price: 600,
    image: 'https://www.artefacta.com/media/catalog/product/b/i/bibury_22_jetblack_3_131627-min.png',

});

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-cards');
    
        // prodduct= {name, price, img} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDatailAside);
    
        const productInfo = document.createElement('info');
        productInfo.classList.add('product-info');
    
        const productInfoDiv =  document.createElement('div');
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productFigure = document.createElement('Figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Assets/icons/bt_add_to_cart.svg');
        
        productFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);