function F() {
    console.log('hello')
    return 100
}

function createCard(name) {
    this.cardName = name
}

const a1 = new createCard('小安')

//  宣告

function hello() { }

let hello = function () { }

let hello = () => { }


//class

class Card {
    constructor(initName) {
        this.name = initName
    }
}

class Cards extends car {

}