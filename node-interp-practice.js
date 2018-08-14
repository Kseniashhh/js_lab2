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