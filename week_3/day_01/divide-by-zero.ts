// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

// Solution 1

function dividerWithoutExceptions(input: number) {
    if (input == 0) {
        return 'fail';
    } else {
        let result: number = 10 / input;
        return result;
    }
}

console.log(dividerWithoutExceptions(0));


// Solution 2

function dividerWithExceptions(input: number) {
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
            console.log(result);
        }
    }
}

dividerWithExceptions(0);