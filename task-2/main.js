// Task-1. მოცემულია მასივი [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს.

/*
const userArr = [{ name: 'Temo', age: 25 }, { name: 'Lasha', age: 21 }, { name: 'Ana', age: 28 }]

function nameByAge(arr) {
    let userName = arr[0].name
    let minAge = arr[0].age

    for (const item of arr) {
        if (item.age < minAge) {
            minAge = item.age
            userName = item.name
        }
    }

    return userName

}

console.log(nameByAge(userArr) + ' is most young!');

*/

// Task-2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს.

/*
const user = {
    name: 'jack',
    lastName: 'Smith',
    age: 30,
    isMale: true,
    smile: function () {
        console.log('Jack can smile.');
    }
}

function createCopy(obj){
    let objCopy = {...obj}
    objCopy.name = 'david' // გავჩეკოთ რომ განსხვავებულია

    return objCopy
}

console.log(user);
console.log(createCopy(user));

*/

// Task-3. დაწერე პროგრამა, სადაც ორი a და b მომხმარებელი აგორებს კამათელს მანამ, სანამ არ გაგორდება 3. რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს ის არის გამარჯვებული.

function diceRoll(name1, name2) {
    let counter1 = 0
    let counter2 = 0
    let diceFace = parseInt(Math.random() * 6) + 1

    do {
        counter1++
        diceFace = parseInt(Math.random() * 6) + 1
    } while (diceFace !== 3);

    do {
        counter2++
        diceFace = parseInt(Math.random() * 6) + 1
    } while (diceFace !== 3);

    if (counter1 > counter2) {
        console.log(name1 + "'s result is: " + counter1 + ' and ' + name2 + "'s result is: " + counter2 + ". The winner is " + name2)
    } else if (counter1 == counter2) {
        console.log(name1 + "'s result is: " + counter1 + ' and ' + name2 + "'s result is: " + counter2 + ". We have a draw!")
    } else {
        console.log(name1 + "'s result is: " + counter1 + ' and ' + name2 + "'s result is: " + counter2 + ". The winner is " + name1)
    }
}

diceRoll('Avto', 'Giga')
