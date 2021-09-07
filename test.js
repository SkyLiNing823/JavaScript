// for (let i = 1; i < 10; i++) {
//     console.log(i)
// }

function print(x) {
    for (let i = 1; i < x + 1; i++) {
        console.log(i)
    }
}

function starReturn(x) {
    let string = ''
    for (let i = 1; i < x + 1; i++) {
        string += '*'
    }
    return string
}

function isUpperCase(x) {
    let y = x[0];
    if ('A' <= y & y <= 'Z') {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

function position(x) {
    let s = 1
    for (i = 0; i < x.length; i++) {
        if ('A' <= x[i] & x[i] <= 'Z') {
            console.log(x[i], i)
            s = 0
            break
        }
    }
    if (s == 1)
        console.log(-1)
}

function findSmallCount(x, y) {
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] < y) {
            count++;
        }
    }
    console.log(count)
}

