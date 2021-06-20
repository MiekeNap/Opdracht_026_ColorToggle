//open- en dichtklappen van hamburger
const menu = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");

const toggleMenu = function() {
    if(menu.className == "open") {
       //shrink the menu
       menu.className = "closed";   
    }
    else {
        //expand the menu
        menu.className = "open"; 
    }
};

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("mousemove", toggleMenu);
hamburger.addEventListener("mouseout", toggleMenu);


//kleuren-menu
const bodyColor = document.querySelector("body");
const homeButton = document.querySelector("#home");
const redButton = document.querySelector('#red');
const orangeButton = document.querySelector('#orange');
const yellowButton = document.querySelector('#yellow');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');

//events per kleur-button
const changeToHome = function(){
    bodyColor.classList.remove("red-background");
    bodyColor.classList.remove("orange-background");
    bodyColor.classList.remove("yellow-background");
    bodyColor.classList.remove("green-background");
    bodyColor.classList.remove("blue-background");
    bodyColor.classList.add("beige-background");
    toggleMenu();      
};
homeButton.addEventListener('click', changeToHome);

const changeToRed = function(){
    bodyColor.classList.remove("beige-background");
    bodyColor.classList.remove("orange-background");
    bodyColor.classList.remove("yellow-background");
    bodyColor.classList.remove("green-background");
    bodyColor.classList.remove("blue-background");
    bodyColor.classList.add("red-background");
    toggleMenu();
};
redButton.addEventListener('click', changeToRed);

const changeToOrange = function(){
    bodyColor.classList.remove("beige-background");
    bodyColor.classList.remove("red-background");
    bodyColor.classList.remove("yellow-background");
    bodyColor.classList.remove("green-background");
    bodyColor.classList.remove("blue-background");
    bodyColor.classList.add("orange-background");
    toggleMenu();
};
orangeButton.addEventListener('click', changeToOrange);

const changeToYellow = function(){
    bodyColor.classList.remove("beige-background");
    bodyColor.classList.remove("red-background");
    bodyColor.classList.remove("orange-background");
    bodyColor.classList.remove("green-background");
    bodyColor.classList.remove("blue-background");
    bodyColor.classList.add("yellow-background");
    toggleMenu();
};
yellowButton.addEventListener('click', changeToYellow);

const changeToGreen = function(){
    bodyColor.classList.remove("beige-background");
    bodyColor.classList.remove("red-background");
    bodyColor.classList.remove("0range-background");
    bodyColor.classList.remove("yellow-background");
    bodyColor.classList.remove("blue-background");
    bodyColor.classList.add("green-background");
    toggleMenu();
};
greenButton.addEventListener('click', changeToGreen);

const changeToBlue = function(){
    bodyColor.classList.remove("beige-background");
    bodyColor.classList.remove("red-background");
    bodyColor.classList.remove("0range-background");
    bodyColor.classList.remove("yellow-background");
    bodyColor.classList.remove("green-background");
    bodyColor.classList.add("blue-background");
    toggleMenu();
};
blueButton.addEventListener('click', changeToBlue);
