// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

// Solution 1

function dividerWithoutExceptions(input: number) {
    if (input == 0) {
        console.log('fail');
    } else {
        let result: number = 10 / input;
        console.log(result);
    }
}

dividerWithoutExceptions(0);


// Solution 2 (with exception: try-method)

function dividerWithError(input: number): number {
    try {
        if (input == 0) {
            throw new TypeError('fail');
        }
    } catch (e) {
        console.log(e.message);
    }
    finally {
        if (input != 0) {
            let result: number = 10 / input;
            return result;
        }
    }
}

console.log(dividerWithError(5));


// Solution 3:

function dividerWithErrorShorter(input: number): number {
    if (input == 0) {
        throw new TypeError('fail');
    }
    return 10 / input;
}

try {
  console.log(dividerWithErrorShorter(0));
}
catch (error) {
  console.log(error.message);
}

