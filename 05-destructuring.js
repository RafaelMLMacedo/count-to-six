// userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]
let userArray = process.argv.slice(2)

let user = {};

[, user.username, user.email] = userArray

console.log(user); // {username: "jdoe", email: "john@doe.com"}