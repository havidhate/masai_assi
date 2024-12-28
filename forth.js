let one;
let two;

function compare(one, two) {
    if (one > two) {
        console.log(`${one} is larger than ${two}`);
    } else if (one === two) {
        console.log("Both are equal");
    } else {
        console.log(`${two} is larger than ${one}`);
    }
}

compare(2, 10);