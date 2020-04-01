// Spread in Array
let fruits: Array<string> = [`🍍`, `🍎`, `🍏`];
let food: Array<string> = ['🍕', '🍔', '🌯'];
let edibles: Array<string> = [...fruits, ...food];

console.log("Got the edibles as: ", edibles);

// Spread in Objects
let user = {
    firstName: 'Rafael',
    lastName: 'Casachi',
    username: 'rafael.casachi'
};

let userDetails = {
    ...user,
    address: '182, North Street',
    email: 'rafael.casachi@anything.com'
};

console.log("Got the users as: ", user);

// Spread in Functions
function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log('Got the sum of all the numbers as: ', add(...numbers));

// Backticks
console.log(`The user with name: ${user.firstName} has an address of ${userDetails.address}`);

console.log(`Got the edibles as: ${edibles}`);

// Object Destructure
let {firstName, lastName: lName} = user;
console.log(firstName);
console.log(lName);

// Array Destructure
let [pineapple, apple, greenApple] = fruits;
console.log(pineapple, apple, greenApple);

// Rest Operator
let [justApple, ...restEdibles] = edibles;
console.log(justApple, restEdibles);

let { firstName: fName, ...restUserDetails } = userDetails;
console.log(fName, restUserDetails);

function getEdibles(apple?, ...restEdibles) {
    console.log(apple);
    console.log(restEdibles);
}
getEdibles(...edibles);