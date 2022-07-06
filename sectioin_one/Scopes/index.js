//Scopes in javaScript
// Scope in javaScript refers to a context in which a code is executed, which determines the accessibility 
//of various, object, variables and functions, etc.

// For instance
let size = 20;

let userDoc = () => {
    let firstName = "John";
    console.log("This is a local variable", firstName);
    console.log("This is a global variable", size);
}

userDoc()

alert(size) // Works fine
alert(firstName) //Throw an error, because name is not declared in scoope


//Closures//
//A closure is a function that has access to the parent scope, even after the parent function has closed.
// in javaScript all function are closures, because they have access to global scope