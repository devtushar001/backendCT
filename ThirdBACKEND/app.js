const { getDadjoke } = require("random-jokes");


const joke = await getDadjoke();

console.log(joke)