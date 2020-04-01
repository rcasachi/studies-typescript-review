function greetUser(name: string) {
    console.log(`Hello, ${name}`);
}

const greetUserByName = function(name: string) {
    console.log(`Hello, ${name}`);
}

greetUser('John');
greetUserByName('Joseph');

// Arrow Function
const greetUserByNameArrow = (name: string) => console.log(`Hello, ${name}`);
greetUserByNameArrow('Jane');


const edibles = [
    {
        edible: '🍕',
        isVegan: false,
    },
    {
        edible: '🍔',
        isVegan: false,
    },
    {
        edible: '🍏',
        isVegan: true,
    },
    {
        edible: '🥘',
        isVegan: false,
    }
];
edibles.filter(function(item) {
    return item.isVegan;
});
edibles.filter(item => item.isVegan);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    lazyGreet: function() {
        const that = this;
        setTimeout(function() {
            console.log(`Hey, ${that.firstName}`);
        }, 1000);
    }
};
user.lazyGreet();

const userArrow = {
    firstName: 'Jane',
    lastName: 'Doe',
    lazyGreet: () => setTimeout(() => console.log(`Hey, ${this.firstName}`), 1000)
};
userArrow.lazyGreet();