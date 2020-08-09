/*window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbarID");
var nav_link = document.getElementById('nav_linkID');
var search = document.getElementById('searchID');
var logo = document.getElementById('logoID');

var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        //nav_link.style.display = 'flex';
        //search.style.display = 'flex';
        //logo.style.marginLeft = '-130%';
        //to do this again change the logo to margin-left:47%; and display of nav_link and search

    } else {
        navbar.classList.remove("sticky");
        //logo.style.transition = 'all 1.3s';
    }
}
*/
window.onscroll = function () { myFunction() };//DECLARATON OF FUNCTION
const goTop = document.getElementById('goTopID');

function myFunction() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        goTop.style.display = 'none';
    } else {
        goTop.style.display = 'flex';
    }
}
function goTopBTN() {
    window.scrollTo(0, 0);
}
window.onload = function () {
    window.scrollTo(0, 0);
};

const nav = document.getElementById('navbarID');

const search = document.getElementById('searchBarID');
const overlayID = document.getElementById("overlayID");
const searchOverlay = document.getElementById('searchOverlay');

//const shop_top = document.getElementById('containerID');

const closeBTN = document.getElementById('closebtnID');

const login = document.getElementById('loginID');

const closeBTN2 = document.getElementById('closebtnID2');
const cart = document.getElementById('cart-overlayID');
const cartLogo = document.getElementById('cartNavID');

const mainBody = document.getElementById('main_bodyID');

const footer = document.getElementById('footerID');
function disable() {
    nav.style.pointerEvents = 'none';
    nav.style.opacity = '0.9';
    nav.style.transition = 'all 0.3s'

    mainBody.style.pointerEvents = 'none';
    mainBody.style.opacity = '0.3';
    mainBody.style.transition = 'all 0.3s'

    //shop_top.style.pointerEvents = 'none';
    //shop_top.style.opacity = '0.1';
    //shop_top.style.transition = 'all 0.3s'

    footer.style.pointerEvents = 'none';
    footer.style.opacity = '0.3';
    footer.style.transition = 'all 0.3s'
}
function enableAll() {
    nav.style.pointerEvents = 'all';
    nav.style.opacity = '1';
    mainBody.style.opacity = '1';
    mainBody.style.pointerEvents = 'all';
    footer.style.opacity = '1';

    //shop_top.style.opacity = '1';
    //shop_top.style.pointerEvents = 'all';
}
function openNav() {
    if (document.body.clientWidth <= 450) {
        overlayID.style.width = "100%";
        searchOverlay.style.transitionDelay = "0s"
        searchOverlay.style.top = "25px";
    }
    else if (document.body.clientWidth == document.body.clientWidth) {
        document.body.style.background = "black";
        overlayID.style.width = "400px";
        searchOverlay.style.transitionDelay = "0s"
        searchOverlay.style.top = "25px";
        closeBTN.style.display = "flex";
        disable();
    }
}
function closeNav() {
    document.body.style.background = "white";
    closeBTN.style.display = "none";
    overlayID.style.width = "0";
    searchOverlay.style.transitionDelay = "0.3s"
    searchOverlay.style.top = "-26px";
    search.value = "SEARCH";
    enableAll();
}
function openCart() {
    if (document.body.clientWidth == document.body.clientWidth) {
        document.body.style.background = "black";
        cart.style.width = "450px";
        closeBTN2.style.display = "flex";
        disable();
    }
}
function closeCart() {
    document.body.style.background = "white";
    closeBTN2.style.display = "none";
    cart.style.width = "0";

    enableAll();
}
