const greeter = (function () {
    let greeting = 'Hello';
    const exclaim = msg => `${msg}!`;
    const greet = name => exclaim(`${greeting} ${name}`);
    const salutation = (newGreeting) => {
        greeting = newGreeting;
    };
    return {
        greet,
        salutation,
    };
}());


console.log(greeter.greet("Alice"));
greeter.salutation("Hi");
console.log(greeter.greet("Mary"));

console.log(greeter.greeting);
greeter.greeting = "Hey";
console.log(greeter.greet("Alice"));

