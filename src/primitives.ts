// Booleans
let authorized: boolean;

authorized = true;
authorized = false;
authorized = null;
authorized = undefined;
authorized = (() => true)();
authorized = (() => false)();

// Numbers
let oneNumber: number;

oneNumber = 1;
oneNumber = -1;
oneNumber = 1.1;
oneNumber = -1.1;
oneNumber = 0b1010; // Binary
oneNumber = 0o123; // Octal
oneNumber = 0x123; // Hexadecimal
oneNumber = (() => 0x123)();
oneNumber = null;
oneNumber = undefined;

// String
let username: string;

username = "Rafael";
username = 'Rafael';
username = `Rafael`;
username = `Rafael`.toUpperCase();
username = (() => 'Rafael')();
username = null;
username = undefined;

// Null
let data: null;

data = null;
data = undefined;
data = (() => null)();
data = (() => undefined)();

// Undefined
let variable: undefined;

variable = null;
variable = undefined;
variable = (() => null)();
variable = (() => undefined)();