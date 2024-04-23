// 1. Palindrome Check
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

// 2. Minimum and Maximum Numbers
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

// 3. Missing Number Identification
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
