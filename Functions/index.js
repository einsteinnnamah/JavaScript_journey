// //FUnctions in JavaScript //
//This is a basic intro to functions in javaScript
//Functions are a way to group a series of statements together to perform a specific task.
/***/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//calling the function sum and storing it with a variable called result
// function sum () {
//     result = 20 + 30
//     console.log ( `This is the output ${result}`)
// }

// sum()    //calling the function sum

// let count = 0; // This kind of variable outside of the function is called a global variable
// //Function without  parameters //
// function sumData () {
//     let localCount = 1

//     count = count + 1 //adding a global variable count
//     localCount = localCount + 2 //adding a local variable localCount
    
//     console.log("New count value:", count)
//     console.log("Local Count variable:", localCount)

// }

// sumData()
//Note: localvariables are not available outside of the function, this are variables that are in the function
//Note: global variables are available outside of the function and can be used anywhere in the code






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Functions with Parameters//
// /*******/
//what is happening her is that we are calling the name of the function
//and the parameters that we want to pass to the function
// with this method we can create a function that will take in parameters of any type
// function displayName (firstName, lastName, age, year) {
//     alert(`Hello ${firstName} ${lastName} ${age} years old. You were born in ${year}`)
// }

// displayName("John", "Doe")


// //but now what is if we give the age and year a value 
// function diplayName (firstName, lastName, age =50, year=1995) {
//     alert(`Hello ${firstName} ${lastName} ${age} years old. You were born in ${year}`)
// }

// displayName("John", "Doe")

// //Simple analogy in using functions//
// // Example 2:
// // we want to create a function that will allow a user logg in 
// // then if he/she is incorrect it will show undefined 

// function userLoginAuth (userNameSet, passwordSet) {
//     let userName = prompt(`Hello enter your username`) //Note: a prompt is a way to get input from the user
//     let password = prompt(`Hello enter your password`)
//     if (userName == "user1" && password == "user1") {
//         alert("Welcome user1")
//     } else alert(`This username is ${userNameSet} and password is also ${passwordSet}`)
// }

// userLoginAuth()

// //wow this was great hope you understand 
// //if you don't you can always go back to the fundamentals uptop




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//functions with return
//In this example we want to create a function that will return the value of the sum of two numbers.
function getFullName (firstName="Helen", lastName="john") {
    const fullName = firstName + " " + lastName //here we are concatating(combining) the two strings
    return fullName //this is the return statement that will return the value of the fullName
}

//Note: we can also change the name of the let variable to anything we want i.e fullname1 and fullname2
let fullName1 = getFullName("John", "Doe") //here we are calling the function and passing the values
let fullName2 = getFullName()
// alert(fullName1)
// alert(fullName2)

//Note: if we remove the return statement it will return undefined

//Example 3: simple function with return
//we want to create a function that will return the value of the sum of two numbers.
function getSum (num1, num2) {
    const numSum = num1 + num2
    return numSum
}

let sum1 = getSum(10, 20)
// alert(sum1)

//Example 4: intermidate function with return
//We want to create a function with return that shows if you can vote or not
// if you have not attain that age it will show undefined

function voteAuth (voteSuccessful) {
    let age = prompt("Enter your age")
    const agelimit = 18
    if (age >= agelimit) {
        return voteSuccessful
    } else alert ("You are not old enough to vote")
}

let voteResults = voteAuth("You can vote")
alert(voteResults)