var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW


// t's done when the string "Canis Major" is added as the first element of the constellations array and no elements are removed.

var newConstellations = constellations.unshift('Canis Major');
console.log(newConstellations);

//It's done when "Venus" is removed from the planets array.

var newPlanets = planets.slice(0,5);
console.log(newPlanets);

//It's done when the arrays constellations and planets are joined to form a new array named galaxy. The arrays constellations and planets should not be altered.
var galaxy = Array.prototype.concat(constellations, planets);
console.log(galaxy);


//t's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable

var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);
