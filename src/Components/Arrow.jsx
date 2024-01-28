import React from 'react';

export default function Arrow() {
    const hello = function() {
        return "Hello World!";
    };

    const hello_arrow = () => {
        return "Hello World!";
    };

    // Example of an arrow function with parameters
    const greet = (name) => {
        return `Hello, ${name}!`;
    };

    // Arrow function with a parameter and implicit return
    const implicit_return = (name) => `Hello, ${name}!`;


    return (
        <div>
            <p>{hello()}</p>
            <p>{hello_arrow()}</p>
            <p>{greet('Alice')}</p>
            <p>{implicit_return('Bob')}</p>
        </div>
    );
}
