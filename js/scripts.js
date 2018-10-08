//Practice



// alert("Hello, how are you?");
// document.write("<h2>Welcome to JavaScript Basics</h2>");

// var message = "Thank you for visiting our page";
// alert(message);

// var dayOfWeek = prompt("What day is it?");
// alert("Today is " + dayOfWeek);

// var diceRoll = Math.floor(Math.random() * 6) + 1;
// alert("You rolled a " + diceRoll);

// var isAdmin = false;
// var isStudent = true;

// if (isAdmin) {
//     alert('Welcome administrator')
// } else if (isStudent) {
//     alert('Welcome student')
// }

// function goToCoffeeShop(drink, pastry) {
//     alert(drink + " and " + pastry + " are on the way!");
// }
// goToCoffeeShop("Espresso", "croissant");

function randomNumber(upper){
    return Math.floor(Math.random() * upper ) + 1;
}

var counter = 1;
while ( counter < 10) {
    var randNum = randomNumber(6);
    document.write(randNum + " ");
    counter += 1;
}