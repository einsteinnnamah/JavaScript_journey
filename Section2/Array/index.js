//Array in JavaScript//
//Arrays are used to store ordered collection of items//

// let arr = new Array(); //class method of creating an array//

// let arr = []; //The preferred and shorter method of creating an array//

// let usersInfo = ["john", "Mary", "Kola", 20.6, {skinColor: "dark"} ]

// console.log(usersInfo)
// console.log(usersInfo.length) //to check how many items in an array

//Note: a array is not a primitive type i.e they can store more than one type of value

// //Let do something fun
// //We want to create an array of strings and get the positions /values of the items in the array

// let userAnimals = ["Dog", "Cat", "Mouse", "Bat"]
// // THis is  index (   0     1       2       3)

// // console.log(userAnimals[0]) //Shows the first item in the array
// // console.log(userAnimals[1]) //Shows the seconda item in the array
// // console.log(userAnimals[3]) //Shows the last item in the array


// //Now what if you want to update an item in an array
// //Using the previous example

// userAnimals[0] = "Lion"

// console.log(userAnimals) //As you can see in the console the array has been updated to ['lion', 'cat', 'Mouse', 'Bat']


//Array Methods//


// //Using the Push method
//Add a value to the end of an array//
let userAnimals = ["Dogs", "Cat", "Mouse", "Hen", "Turtle", ]

// userAnimals.push("Camel") // you will notice that this has added "camel" to the back of the array userAnimals

// console.log(userAnimals)

//Remove methods
//Remove a value from an array

// userAnimals.pop() //you will notice that this has removed the last item  in the array "Mouse"
// console.log(userAnimals)


//Shift Methods
//Opposite of pop method, but it will remove from the first item in the array

// userAnimals.shift()
// console.log(userAnimals)

//UnShift Methods
//Add to the beginning of an array

// userAnimals.unshift("Cheetah")
// console.log(userAnimals)

//Indexof method
//Used to search an array, so we can know the actual index of an item in an array


// console.log(userAnimals.indexOf("Dogs"))


//Slice Method
//To get a portion of item on an array

// console.log(userAnimals.slice(1,4))

//Get a copy of an array
// let copyOfUserAnimals = userAnimals.slice()


//reverse an an array

// userAnimals.reverse()
// console.log(userAnimals)

//Sort an array

// userAnimals.sort()
// console.log(userAnimals)





// //Iterate over an array with for..of loop
// for (let animal of userAnimals) {
//     console.log(`The animal is: ${animal}`)
// }



// //Using the for..in loop to ilterate over the values
// for (let index in userAnimals) {
//     console.log(`The index is ${index} and the value is ${userAnimals[index]}`)
// }


//also iterate over an array with for..each loop
// displayEachAnimal = (animal) => {
//     console.log(`The animal is ${animal}`)
// }
// userAnimals.forEach (displayEachAnimal) 

// //OR we make it shorter with an arrow function
// userAnimals.forEach( (animal)=> {
//     console.log(`The animal is: ${animal}`)
// })




// //We can also us a map to itlerate over an array
// let Usernames = ["john", "ade", "kenny", "johnson"]
// let userNameInCaps = Usernames.map(( Usernames) => {
//     //do the transformation
//     const transformedUsername = Usernames.toUpperCase()
//     return transformedUsername
// })


// console.log(userNameInCaps)

//ilterate over the array with filter
let populations = [200, 100, 30, 5, 60, 230, 100]

let populationGreaterFilter = populations.filter ((populations) => {
    //filteration
    if (populations > 30) {
        return populations
    }
})