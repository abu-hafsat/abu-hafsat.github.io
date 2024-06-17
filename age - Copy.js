let p1 = 2024;
let p2 ;
const input = document.getElementById("input-1");
const button = document.getElementById('submit');

button.addEventListener("click", function(){
p2 = getage();
    document.querySelector(".year").textContent = p2;
    document.querySelector(".months").textContent = 12 * p2;
    document.querySelector(".weeks").textContent = 48 * p2;
    document.querySelector(".days").textContent = 360 * p2;
    document.querySelector(".hours").textContent = 8640 * p2;
    document.querySelector(".minutes").textContent = 518400 * p2;
 if(input.value == 0 ){
    alert("you didnt enter the year");
    document.querySelector(".year").textContent = 0;
    document.querySelector(".months").textContent = 0;
    document.querySelector(".weeks").textContent = 0;
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
 }
});

function getage () {
    return 2024 - input.value;
};
