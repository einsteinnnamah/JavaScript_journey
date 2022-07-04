// //FUnctions in JavaScript //

// function sum () {
//     result = 20 + 30
//     console.log ( `This is the output ${result}`)
// }

// sum()


// let count = 0;
// //Function without  parameters //
// function sumData () {
//     let localCount = 1

//     count = count + 1 //adding a global variable count
//     localCount = localCount + 2 
    
//     console.log("New count value:", count)
//     console.log("Local Count variable:", localCount)

// }

// sumData()


// //FUnctions with Parameters//
// /*******/
//what is happening her is that we are calling the name of the function
//and the parameters that we want to pass to the function
// with this method we can create a function that will take in parameters of any type
// function displayName (firstName, lastName, age, year) {
//     alert(`Hello ${firstName} ${lastName} ${age} years old. You were born in ${year}`)
// }

// displayName("John", "Doe")


//Simple and analogy functions//
// Example 2:
// we want to create a function that will allow a user logg in 
// then if he/she is invalid it will show undefined 

function userLoginAuth (userNameSet, passwordSet) {
    let userName = prompt(`Hello enter your username`)
    let password = prompt(`Hello enter your password`)
    if (userName == "user1" && password == "user1") {
        alert("Welcome user1")
    } else alert(`This username is ${userNameSet} and password is also ${passwordSet}`)
}

userLoginAuth("undefined", "undefined")
//wow this was great hope you understand 
//if you don't you can always go back to the fundamentals up top