// Task-1. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი.

/*

function calc(num1, num2, ...args) {
    if (arguments.length <= 2) {
        return 'At least 3 arguments should be provided!';
    } else {
        let sumOfTwo = num1 + num2
        let sumOfRest = 1

        for (const element of args) {
            sumOfRest = element * sumOfRest
        }

        let arr = [sumOfTwo, sumOfRest]
        return arr
    }
}

console.log(calc(1,2,3,4))

*/

// Task-2. დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს. გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined.

/*

const user = {
    banks: [
        { address: { city: 'Batumi' } },
        { address: { city: 'Tbilisi' } },
        { address: { city: 'Rustavi' } },
    ]
}

function getCity(user = {}, cityPos) {
    let { banks } = user
    let { address: { city } } = banks[cityPos]

    return city
}

console.log(getCity(user, 2));

*/

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს. გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია შეიქმნას იმათი ასლებიც. გამოიყენეთ (...) ოპერატორი.

const user = {
    firstName: 'Jack',
    lastName: 'Smith',
    interests: ['Football', 'Hiking'],
    visited: {
        country: 'Italy',
        cities: {
            city: 'Rome',
            address: 'Piazza del Coloseo'
        }
    }
}


function objCopy(obj) {
    let user2 = {}
    if (typeof obj !== 'object' || obj === null) {
        return 'Type of provided argument must be Object!'
    } else {
        user2 = {
            ...obj,
            interests: [...obj.interests],
            visited: {
                ...obj.visited,
                cities: {
                    ...obj.visited.cities
                }
            }
        }
    }

    return user2

}


console.log(objCopy(user));
user.visited.cities = { city: 'Naples', address: 'street' }
console.log(user);

