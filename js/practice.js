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

// function randomNumber(upper){
//     return Math.floor(Math.random() * upper ) + 1;
// }

// var counter = 0;
// while ( counter < 10) {
//     var randNum = randomNumber(6);
//     document.write(randNum + " ");
//     counter += 1;
// }

// var count = 0;
// while (count < 26) {
// 	document.write(count);
//   count += 1;
// }

// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var guess;
// var attempts = 0;

// function getRandomNumber(upper){
//     return Math.floor(Math.random() * upper ) + 1;
// }

// while (guess !== randomNumber) {
//     guess = getRandomNumber(upper);
//     attempts += 1;
// }
// document.write("<p>The random number was: " + randomNumber + "<p>");
// document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");

// var randomNumber = getRandomNumber (10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber(upper) {
//     var num = Math.floor(Math.random() * upper) + 1;
//     return num;
// }

// do {
//     guess = prompt("I am thinking of a number between 1 and 10. What is it?")
//     guessCount += 1;
//     if (parseInt(guess) === randomNumber) {
//         correctGuess = true;
//     }
// } while (! correctGuess)
//     document.write("<h1>You guessed the number!</h1>");
//     document.write("It took you " + guessCount + " tries to guess the number " + randomNumber);

// var html = " ";

// for (var i = 1; i <= 10; i += 1) {
//     html += "<div>" + i + "</div>";
// }
// document.write(html);

// var myShopping = [
//     " milk", 
//     " eggs", 
//     " cereal"
// ];
// myShopping.push(" carrots", " soup")
// myShopping.unshift(" peas", " potato", " rice");
// myShopping.shift();
// alert(myShopping[3]);
// document.write(myShopping); 
// document.write(", " + myShopping.length);

// var questions = [
//     ["How many states are in the USA?", 50],
//     ["How many continents are there?", 7],
//     ["How many ounces are in a cup?", 8]
// ];

// var correctAnswers = 0;
// var question;
// var answer;
// var response;
// var correct = [];
// var wrong = [];

// function print(message) {
//     var outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = message;
// }

// function buildList(arr) {
//     var listHTML = "<ol>";
//     for (var i = 0; i < arr.length; i += 1) {
//         listHTML += "<li>" + arr[i] + "</li>";
//     }
//     listHTML += "</ol>"
//     return listHTML;
// }

// for (var i = 0; i < questions.length; i += 1) {
//     question = questions[i][0];
//     answer = questions[i][1];
//     response = parseInt(prompt(question));
//     if (response === answer) {
//         correctAnswers += 1;
//         correct.push(question);
//     } else {
//         wrong.push(question);
//     }
// }
// html = "You got " + correctAnswers + " question(s) right.";
// html += "<h2>You got these questions correct:</h2>";
// html += buildList(correct);
// html += "<h2>You got these questions wrong:</h2>";
// html += buildList(wrong);
// print(html);

// var person = {
//     name: "Sarah",
//     country: "US",
//     age: 35,
//     treehouseStudent : true,
//     skills : ['JavaScript', 'HTML', 'CSS']
// };
// person.name = "Jill";
// alert(person.name);

// var person = {
//     name: "Sarah",
//     country: "US",
//     age: 35,
//     treehouseStudent : true,
//     skills : ['JavaScript', 'HTML', 'CSS']
// };
// for (prop in person) {
//     console.log(prop, ": ", person[prop]);
// }

// var students = [ 
//     { 
//      name: 'Dave',
//       track: 'Front End Development',
//       achievements: 158,
//       points: 14730
//     },
//     {
//       name: 'Jody',
//       track: 'iOS Development with Swift',
//       achievements: '175',
//       points: '16375'
//     },
//     {
//       name: 'Jordan',
//       track: 'PHP Development',
//       achievements: '55',
//       points: '2025'
//     },
//     {
//       name: 'John',
//       track: 'Learn WordPress',
//       achievements: '40',
//       points: '1950'
//     },
//     {
//       name: 'Trish',
//       track: 'Rails Development',
//       achievements: '5',
//       points: '350'
//     }
//   ];
// console.log(students);

