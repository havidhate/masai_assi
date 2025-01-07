function quickselect(arr, k, left = 0, right = arr.length - 1) {
    if (left === right) {
        return arr[left];
    }

    let pivotIndex = partition(arr, left, right);

    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickselect(arr, k, left, pivotIndex - 1);
    } else {
        return quickselect(arr, k, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

function findKthLargest(arr, k) {
    return quickselect(arr, arr.length - k);
}

function findKthSmallest(arr, k) {
    return quickselect(arr, k - 1);
}

const arr = [3, 2, 1, 5, 6, 4];
const k = 3;

console.log(findKthLargest(arr, k)); 
console.log(findKthSmallest(arr, k));