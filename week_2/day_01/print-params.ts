'use strict';

export {};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams (...differentArguments: any[]) {
    console.log(differentArguments);
}

printParams('any', 4, 6, 8, 'type', 'of arguments');