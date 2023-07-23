let pointsHome = 0;
let pointsGuest = 0;

function add1(){
    pointsHome +=1;
    document.getElementById("home-counter").textContent = pointsHome;
}

function add2(){
    pointsHome +=2;
    document.getElementById("home-counter").textContent = pointsHome;
}

function add3(){
    pointsHome +=3;
    document.getElementById("home-counter").textContent = pointsHome;
}

function add1Guest(){
    pointsGuest +=1;
    document.getElementById("guest-counter").textContent = pointsGuest;
}

function add2Guest(){
    pointsGuest +=2;
    document.getElementById("guest-counter").textContent = pointsGuest;
}

function add3Guest(){
    pointsGuest +=3;
    document.getElementById("guest-counter").textContent = pointsGuest;
}

function newGame(){
    document.getElementById("guest-counter").textContent = 0;
    document.getElementById("home-counter").textContent = 0;
    pointsHome = 0;
    pointsGuest = 0;
    document.getElementById("answer").textContent = " ";
    document.getElementById("draw").textContent = " ";
    document.getElementById("answer1").textContent = " ";
    document.getElementById("home-container").style.boxShadow = "none";
    document.getElementById("guest-container").style.boxShadow = "none";
}

function endGame(){
    if(pointsHome>pointsGuest){
        document.getElementById("answer").textContent = "Home wins!";

        document.getElementById("home-container").style.boxShadow = "10px 10px 30px 10px #71DFE7";
    }else if(pointsHome==pointsGuest){
        document.getElementById("draw").textContent = "🤛 🤜";
    }else{
        document.getElementById("answer1").textContent = "Guest wins!";

        document.getElementById("guest-container").style.boxShadow = "10px 10px 30px 10px #71DFE7";
    }
}