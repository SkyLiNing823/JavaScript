let myName = "我是henry" //字串
let num = 100 //number 包含整數小數點
console.log(myName)

let isTrue = true
console.log(myName.length)

let bag = undefined //空
let bag2 = null //空
//語法意義相同 但undefined != null

let a = 'hi'
let b = 'my friend'
let c = a + b

//let 可以取代 var
//const 常數 不可變

let array = ['a', 'b', 'c']
console.log('現在成員:', array)
array.push('d')
console.log('現在成員:', array)
array.length //len(array)

//Object
const card = {
    name: 'chen',
    phone_number: 100000
}

console.log('NAME:', card.name)

const card_collect = [card, card, card, { name: 'jay', phone: 100 }]

if (num = 10000) {
    num = 100
} else if (num = 100) {
    num = 100
} else if (num = 1) {
    num = 100
} else {
    num = 100
}

switch (key) {
    case 100:
        break;
    case 99:
        break;
    case 98:
        a = 100
        break;
    default:
        break;
}