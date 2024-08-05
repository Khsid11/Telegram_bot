const linearSearch = function(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}

const binarySearch = function(arr, x) {
    let lo = 0, hi = arr.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === x) return mid;
        else if (arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

module.exports = {
    linearSearch,
    binarySearch
}
