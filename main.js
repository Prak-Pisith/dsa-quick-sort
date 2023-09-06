var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(numbers) {
    // Base case
    if (numbers.length <= 1)
        return numbers;
    // Randomly find pivot
    var pivot = numbers[Math.floor(Math.random() * numbers.length)];
    var leftArray = [];
    var rightArray = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        // numbers smaller than pivot to the left
        if (num < pivot) {
            leftArray.push(num);
            // numbers greater than pivot to the right
        }
        else if (num > pivot) {
            rightArray.push(num);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(leftArray), true), [pivot], false), quickSort(rightArray), true);
}
var numbers = [5, 7, 1, 3, 8, 9, 2, 6];
console.log("Before sort: ".concat(numbers));
var sorted = quickSort(numbers);
console.log("After sort: ".concat(sorted));
