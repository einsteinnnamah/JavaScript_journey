


//numbers
let size_in_meters = 20 //interger
let size_in_inches = 2.1023 //floating point number
let maxSize = Infinity //positive Infinity
let minSize = -Infinity //Negative infinity
let not_a_number = NaN // Not a number (for operations that are not correct)

//E.g
 let sum = 20 + 23.1; 
 console.log(sum) 

 //BigInt
let very_big_number = 8282342034234234141414124124124128580n;
let another_big_number = BigInt(3124124124124214124)

//Objects
let user1 = {} //Recommended ways

user1["name"] = "Azeez"
user1["age"] = 20
user1["activated"] = true
user1["profile_settings"] = {
    name: "shola", DOB: "20/22", 
}

// console.log(user1)

let user3 = {
    name: "Kenny John",
    age: "20",
    shop: "81/90",
    color: "red",
    "User Profile": {nextOfKin: "Shola Kumi", weight: "20pounds", Beneficary: "Shola Jonny"}

}
delete user3["User Profile"].weight

// console.log(user3)

//get all the values in an object 


// console.log(Object.values(user3))
// console.log(Object.keys(user3))
// console.log(typeof(user3.name))


//More on Objects
//Object.create()
let userSelection = {
    printUserProfile: function ()  {
        console.log(`The selected user is Mr ${this.firstName} ${this.lastName}`)
    }
}

const selectedUser = Object.create(userSelection);
selectedUser.firstName = "Ayodeji";
selectedUser.lastName = `Azeez`;
selectedUser.printUserProfile()




//Strings
 let firstName = "Ayodeji"
 let lastName = 'Azeez'
 let fullName =`Mr ${firstName} ${lastName} `

let message = "Hello my friends\n My name is Jonhson\n I am a Software engineer"


// alert(message.includes("Software"))

