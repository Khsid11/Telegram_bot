const { Telegraf } = require('telegraf');
const quickSort = require('./quicksorting');
const { insertionSort, bubbleSort, selectionSort } = require('./sorting');
const { linearSearch, binarySearch } = require('./searching');
require('dotenv').config();

const bot = new Telegraf(process.env.Bot_token);

bot.start((ctx) => ctx.reply('Welcome to Maitri AlgoBot!'));

bot.hears('hi', (ctx) => {
    ctx.reply(`
    Hi there! Here are the commands you can use:
    /quicksort - Sort an array using Quick Sort
    /insertionsort - Sort an array using Insertion Sort
    /bubblesort - Sort an array using Bubble Sort
    /selectionsort - Sort an array using Selection Sort
    /linearsearch - Search an element using Linear Search
    /binarysearch - Search an element using Binary Search
    `);
});

bot.on('sticker', (ctx) => {
    ctx.replyWithSticker('CAACAgIAAxkBAAIBt2OsO4hEBCG4EuO3cM7Mw7t-f4pPAAIeAAPANk8TG4T7jkpBB8ceBA');
    ctx.reply('❤️');
});

bot.command('quicksort', (ctx) => {
    let array = [64, 34, 25, 12, 22, 11, 90];
    let sortedArray = quickSort([...array]);
    ctx.reply(`
    Algorithm:const quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}
    Sorted array: ${sortedArray}
    `);
});

bot.command('insertionsort', (ctx) => {
    let array = [64, 34, 25, 12, 22, 11, 90];
    let sortedArray = insertionSort([...array]);
    ctx.reply(`
    Algorithm: Insertion Sort
    const insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
    Sorted array: ${sortedArray}
    `);
});

bot.command('bubblesort', (ctx) => {
    let array = [64, 34, 25, 12, 22, 11, 90];
    let sortedArray = bubbleSort([...array]);
    ctx.reply(`
    Algorithm: Bubble Sort 
    const bubbleSort = function(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
    Sorted array: ${sortedArray}
    `);
});

bot.command('selectionsort', (ctx) => {
    let array = [64, 34, 25, 12, 22, 11, 90];
    let sortedArray = selectionSort([...array]);
    ctx.reply(`
    Algorithm: Selection Sort
    const selectionSort = function(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
    Sorted array: ${sortedArray}
    `);
});

bot.command('linearsearch', (ctx) => {
    let array = [64, 34, 25, 12, 22, 11, 90];
    let element = 25;
    let index = linearSearch(array, element);
    ctx.reply(`
    Algorithm: Linear Search
    const linearSearch = function(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}
    Array: ${array}
    Element: ${element}
    Index: ${index}
    `);
});

bot.command('binarysearch', (ctx) => {
    let array = quickSort([64, 34, 25, 12, 22, 11, 90]);
    let element = 25;
    let index = binarySearch(array, element);
    ctx.reply(`
    Algorithm: Binary Search
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
    Sorted array: ${array}
    Element: ${element}
    Index: ${index}
    `);
});

bot.launch();

console.log('Bot is running...');
