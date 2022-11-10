// Chapter 15 Array

// var city0 = "Atlanta"
// var city1 = "Baltimore"
// var city2 = "Chicago"
// var city3 = "Denver"
// var city4 = "Los Angeles"
// var city5 = "Seattle"
// alert("Welcome to " + city3)

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"]
// alert("Welcome to " + cities[2])

// var mixedArray = [1, "Bob", "Now is", true]

// Chapter 16 Arrays: Adding and removing elements

// var pets = []
// pets[0] = "dog"
// pets[1] = "cat"
// pets[2] = "bird"
// console.log(pets)
// pets[3] = "lizard"
// pets[6] = "snake"
// console.log(pets[3])
// pets[3] = "lizard"
// pets[4] = "fish"
// pets[5] = "gerbil"
// pets[6] = "snake"
// pets.pop()
// pets.push("fish", "ferret")
// console.log(pets)

// Chapter 17 Arrays: Removing, Inserting and Extracting elements

// pets.shift()
// pets.unshift("fish", "ferret")
// pets.splice(2, 2, "pig", "duck", "emu")
// pets.splice(2, 0, "pig", "duck", "emu")
// pets.splice(2, 2)
// pets.slice(2, 4)
// var noPets = pets.slice(2, 4)
// console.log(pets)
// console.log(noPets)

// Chapter 18 For loops

// var cityToCheck = prompt("Enter City Name")
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]
// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not on the list")
// }

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// Chapter 19 For loops: Flags, Booleans, array length and loopus interruptus

// var matchFound = "no"
// var matchFound = "no"
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = "yes";
//         alert("It's one of the cleanest cities");
//     }
// }
// if (matchFound === "no") {
//     alert("It's not on the list")
// }

// var matchFound = false
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//     }
// }
// if (matchFound === false) {
//     alert("It's not on the list")
// }

// var matchFound = false
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }
// if (matchFound === false) {
//     alert("It's not on the list")
// }

// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }
// if (matchFound === false) {
//     alert("It's not on the list")
// }

// Chapter 20 for loops nested

// var firstName = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rag"];
// var lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullName = [];
// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + lastName[j]);
//     }
// }
// console.log(fullName)