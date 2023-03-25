//Callbacks

//A function that passes as argument to another function

const greetUSer = (username,callback ) => {
    console.log(callback(username));
}

greetUSer("James Brown", (username) => {
    return "Hello " + username
})



