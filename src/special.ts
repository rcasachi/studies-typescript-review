// void
function logToConsole(): void {
    console.log('Hello World in your browser console!!!');
}

// Array
let fruits: string[];
fruits = [`🍊`, '🍍', "🍎", `🍏`.toUpperCase(), (() => '🍉')(), null, undefined];

let food: Array<string>;
food = [`🍕`, `🍔`];

let generic: Array<string | number | boolean>;
generic = ['💯', '100', 100, 0b100, false, true, null, undefined];

// Tuple
let coordinates: [number, number, number];
coordinates = [12, 13, 14];

let genericTuple: [number, string, boolean];
genericTuple = [12, '12', false];

// Objects
let user: {
    firstName: string,
    lastName: string,
    username: string,
    getUsername: any
} = {
    firstName: 'Rafael',
    lastName: 'Casachi',
    username: 'rafael.casachi',
    getUsername: ():string => this.username
};

// Enum
enum DaysOfTheWeek {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday'
};

let dayToday: DaysOfTheWeek;
dayToday = DaysOfTheWeek.TUESDAY;

// Any
let authorizedUser: any = {
    firstName: 'Rafael',
    lastName: 'Casachi',
    username: 'rafael.casachi', 
};