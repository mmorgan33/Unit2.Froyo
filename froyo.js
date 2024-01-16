// * USER STORY COPIED

// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.



// 1. Ask the user to type a list of froyo flavors, seperating each with a comma.
// 2. They must type "vanilla", "vanilla", "strawberry", "coffee", and "coffee".
// 3. Arrange prompted responses in a table. Table should have each flavor they have ordered.  

const froyoShop = prompt("Hello! \n \nPlease follow the prompts and enter the following flavors in order! Type Ok to proceed.");

const froyo = {
    flavors: ["Berry", "Kiwi", "Lime", "Vanilla", "Coffee", "Strawberry"],
    orderedFlavors: []
};

console.table(froyo); //prints object into table

for (i = 0; i < 1; i++) {
    const firstFlavor = prompt("Please enter Vanilla: "); // First prompt
    froyo.orderedFlavors.push(firstFlavor); // Pushes to froyo object

    const secondFlavor = prompt("Please enter Vanilla: ");
    froyo.orderedFlavors.push(secondFlavor);

    const thirdFlavor = prompt("Please enter Strawberry: ");
    froyo.orderedFlavors.push(thirdFlavor);

    const fourthFlavor = prompt("Please enter Coffee: ");
    froyo.orderedFlavors.push(fourthFlavor);

    const fifthFlavor = prompt("Please enter Coffee: ");
    froyo.orderedFlavors.push(fifthFlavor);
}

console.table(froyo);





// Example. Pushes data to object.
// Can use this to push prompted data to froyo object.


// // const arr = [1, 2, 3, 4, 5, 6];

// // const oddsEvens = {
// // 	odds: [],
// // 	evens: []
// // };
// // console.log(oddsEvens);

// // for (let i = 0; i < arr.length; i++) {
// // 	if (arr[i] % 2 === 1) {
// // 		oddsEvens.odds.push(arr[i]);
// // 	} else {
// // 		oddsEvens.evens.push(arr[i]);
// // 	}
// // }

