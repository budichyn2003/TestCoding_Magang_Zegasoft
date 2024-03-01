// Array Transformation Function
// Problem Statement:
// Write a JavaScript function named transformArray that takes two arguments: an array of numbers and a transformation function. The transformArray function should apply the transformation function to each element in the array and return a new array containing the results. You should not use the built-in Array.prototype.map function to implement this behavior.

// Parameters:

// array: An array containing numbers that will be transformed using the transform function.
// transform: A function that takes a single number as an argument and returns a new number.
// Requirements:

// Do not use the built-in Array.prototype.map function.
// The transform function should be applied to every element in the array.
// The original array should not be modified; instead, a new array with the transformed values should be returned.

function transformArray(array, transform) {
    // Create a new array to store the transformed values
    const resultArray = [];

    // Loop through each element in the array and apply the transformation function
    for (let i = 0; i < array.length; i++) {
        // Apply the transformation function to the current element
        const transformedValue = transform(array[i]);

        // Add the transformed value to the result array
        resultArray.push(transformedValue);
    }

    // Return the new array with transformed values
    return resultArray;
}

const numbers = [1, 2, 3, 4];
const transform = (x) => x * 2;

const transformedArray = transformArray(numbers, transform);
console.log('[' + transformedArray.join(', ') + ']');
// Expected output: [2, 4, 6, 8]
