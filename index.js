
// Switch  large product image by clicking on the small thumbnail images on home screen

const images = document.querySelectorAll(".sm-img");

const addNewClass = () => {
    images.forEach((img)=> img.classList.remove("active"));
};

images.forEach((img ,index)=> {
    let eachImg = img, x = index+1;
    var src = "images/image-product-" + x + ".jpg";
    eachImg.addEventListener('click', () => {
    addNewClass();
    eachImg.classList.add('active');
    document.querySelector(".active-img").setAttribute("src" , src);
  });
});

// Switch  large product image by clicking on the small thumbnail images on Lightbox

const lightBoxPics = document.querySelectorAll(".lightBox-pic");

const addClass = () => {
    lightBoxPics.forEach((pic)=> pic.classList.remove("active"));
};

lightBoxPics.forEach((pic ,index)=> {
    let eachPic = pic, x = index+1;
    var src = "images/image-product-" + x + ".jpg"
    eachPic.addEventListener('click', () => {
    addClass();
    eachPic.classList.add('active');
    document.querySelector(".active-lightBox-img").setAttribute("src" , src);
  });
});

// Menu
const openSideBar = document.querySelector("#open_menu");
const sideBar = document.querySelector(".slide-bar");
const navLinks = document.querySelector(".navlinks");
const slideLinks = document.querySelectorAll(".slide-link");
const close = document.querySelector("#close-menu");

// Cart
const addItems = document.querySelector(".plus");
const removeItems = document.querySelector(".minus");
const cartNumber = document.querySelectorAll(".count-number");
const cartCount = document.querySelector(".cart-count");
const totalPrice = document.querySelector(".total-price");
const cartItems = document.querySelector(".not-empty-cart")
const zeroItem = document.querySelector(".empty-cart");
const cartImg = document.querySelector("#cart-img");
const checkOutBtn = document.querySelector(".checkout-btn");
const cartInfo = document.querySelector(".cart-info");
const addToCartBtn = document.querySelector(".btn")
const addRemove = document.querySelector(".count");

// Make background deem on opening slide Bar
const deem = document.querySelector("#deem");

let count = 0;

// open side bar
openSideBar.addEventListener('click', ()=> {
    sideBar.classList.add("slide-bar-open");
    slideLinks.forEach((link)=> link.classList.add("open-navlinks"));
    deem.classList.add("deem_page");
});

// close side bar
close.addEventListener('click', ()=> {
    sideBar.classList.remove("slide-bar-open");
    deem.classList.remove("deem_page");
});

function showCart () {
    if (cartCount.textContent <= 0) {
        cartItems.style.display = "none";
        zeroItem.style.display = "block";
        checkOutBtn.style.display = "none";
        cartCount.style.display = "none";
    } else {
        cartItems.style.display = "flex";
        zeroItem.style.display = "none";
        checkOutBtn.style.display = "flex";
        cartCount.style.display = "block";
    }
    totalPrice.textContent = "$" + 125 * count;
};

// Add new item(s) 
addItems.addEventListener('click', ()=> {
    count++;
    addRemove.textContent = count;
});

// Remove added item(s) from cart
removeItems.addEventListener('click', ()=> {
    count--;
    if (count < 0) {count = 0};
    addRemove.textContent = count;
});

// Toggle cart
cartImg.addEventListener('click', ()=> {
    cartInfo.classList.toggle('display-flex');
    showCart();
});

// Add new item(s) to cart
addToCartBtn.addEventListener('click', ()=> {
    cartNumber.forEach((a)=> a.textContent = addRemove.textContent);
    cartCount.classList.add('display-block');
    showCart();
});


//  Open  lightbox gallery by clicking on the large product image
const activeImg = document.querySelector(".active-img");
const lightBox = document.getElementById("light-box");
const span = document.getElementsByClassName("close")[0];

activeImg.onclick = function (){
    lightBox.style.display = "block";
}

span.onclick = function () {
    lightBox.style.display = "none";
}


// Slide Show

var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls

function plusSlides(n) {
     showSlides(slideIndex += n);
}

function currentSlide(n) {
     showSlides(slideIndex = n);
}

function showSlides(n) {

     const slides = document.querySelectorAll(".slide");
     if (n > slides.length) {
          slideIndex = 1
     }
     if (n < 1) {
          slideIndex = slides.length
     }

     slides.forEach((slide)=> {
         slide.style.display = "none"
     })
     
     slides[slideIndex-1].style.display = "block";

}
