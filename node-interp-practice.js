// - Declare a variable greeting and assign to it a phrase.
let greeting = "Hello world"
// - Split a string into an array of characters (see the .split() method)
let split_greeting = greeting.split("")
// - Take an array of letters and merge them into a string (see the .join() method)
let join_greeting = split_greeting.join("")

// - Select a random item from an array (Read up on Math.random() to figure out how 
// to choose a random item from your array. JavaScript doesn’t have Python’s 
// random.choice() function at the ready, so we get to do it ourselves!)
function randomChar(array){
	let myNum = Math.floor(Math.random() * 11);
	console.log(array[myNum]);
}

randomChar(greeting)
// Select two random items from an array and swap them

function randomChar(array){
	let firstNum = Math.floor(Math.random() * 11);
	let secondNum = Math.floor(Math.random() * 11);
	console.log(firstNum);
	console.log(secondNum);

	let tempNum = array[firstNum]
	array[firstNum] = array[secondNum]
	array[secondNum] = tempNum
	console.log(array);
}

randomChar(greeting.split(""))


// Create an empty map and assign it to the variable candy

const candy = new Map([])

// Set five colors as keys in the map and flavors as the values, 
// for instance “purple” could be “grape”.

const candyFlavors = new Map([

	['green', 'mint'],
	['orange', 'orange'],
	['purple', 'grape'],
	['red', 'raspberry'],
	['blue', 'blueberry']
])

// Iterate over the candy flavors to print “The x flavor is colored y.” for each.

for (let keyValue of candyFlavors) {
	console.log(`The ${keyValue[1]} flavor is colored ${keyValue[0]}.`)
}

// Get the value of a color from the map, and see 
// what happens when you try getting a value of a color that doesn’t exist.

candyFlavors.get('black')
candyFlavors.get('blue')