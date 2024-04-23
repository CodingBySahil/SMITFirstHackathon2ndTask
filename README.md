# JavaScript Proficiency Test
## Preview link

[Click here to view the JavaScript Proficiency Test](https://codingbysahil.github.io/SMITFirstHackathon2ndTask/)  

## Objective

The primary objective of this project is to evaluate students' understanding and proficiency in JavaScript by solving three programming questions related to palindrome, array manipulation, and number series. The total time allocated for the development of this project is 3 hours.

## Features

### 1. Palindrome Check

- **Description**: A JavaScript function to check if a given string is a palindrome without using any built-in methods.
  
- **Implementation**: 
    ```javascript
    function checkPalindrome() {
        const input = document.getElementById('palindromeInput').value;
        const result = document.getElementById('palindromeResult');
        
        const cleanedStr = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        let isPalindrome = true;

        for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
            if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        
        result.textContent = `Is Palindrome: ${isPalindrome}`;
    }
    ```

### 2. Minimum and Maximum Numbers

- **Description**: A JavaScript function to find the minimum and maximum numbers from a given series of numbers stored in an array.

- **Implementation**: 
    ```javascript
    function findMinMax() {
        const input = document.getElementById('numberInput').value;
        const result = document.getElementById('minMaxResult');
        
        const nums = input.split(',').map(num => parseInt(num.trim(), 10));
        
        if (nums.some(isNaN)) {
            result.textContent = 'Please enter valid numbers';
            return;
        }
        
        const min = Math.min(...nums);
        const max = Math.max(...nums);
        
        result.textContent = `Min: ${min}, Max: ${max}`;
    }
    ```

### 3. Missing Number Identification

- **Description**: A JavaScript function to find the missing number from a series of numbers which is 11, 12, 14, 15, 16, 18, 19, 20.

- **Implementation**: 
    ```javascript
    function findMissingNumber() {
        const series = [11, 12, 14, 15, 16, 18, 19, 20];
        const result = document.getElementById('missingNumberResult');
        
        for (let i = 0; i < series.length - 1; i++) {
            if (series[i + 1] - series[i] !== 1) {
                result.textContent = `Missing Number: ${series[i] + 1}`;
                return;
            }
        }
        
        result.textContent = 'No missing number found';
    }
    ```

## Execution

1. Open `index.html` in a web browser.
2. For each task section:
    - Input the required values.
    - Click the corresponding button to check the solution.
3. The result will be displayed below each task section.

