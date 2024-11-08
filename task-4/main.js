//Task-1. დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს. არ გამოიყენო string.replace() ფუნქცია.

/*
const find = (string, word, change) => {
    if (!string.includes(word)) {
        return string
    } else {
        const start = string.indexOf(word)
        const end = start + word.length
        let newString = ''

        if (start !== 0) {
            newString = find(string.slice(0, start) + change + string.slice(end), word, change)
            return newString
        } else {
            newString = find(change + string.slice(end), word, change)
            return newString
        }
    }

}


console.log('ვახდენთ სიტყვა "ტექსტი"-ს ცვლილებას მონაცემით. ორიგინალი: ტექსტი შეიცვლება მიუხედავად იმისა, ტექსტი წინადადების თავში წერია, შუაში თუ ბოლოში. ტექსტი.')
console.log(find('ტექსტი შეიცვლება მიუხედავად იმისა, ტექსტი წინადადების თავში წერია, შუაში თუ ბოლოში. ტექსტი.', 'ტექსტი', 'მონაცემი'))

*/

//Task-2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას.

/* 

const makeUpper = (str) => {
    let result = ''
    const mapped = []
    
    str.split(' ').map((word) =>{
        mapped.push(word[0].toUpperCase() + word.slice(1))
    })

    return result = mapped.join(' ')
}

console.log(makeUpper('hello, i am from georgia.'))

*/

//Task-3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით. მაგალითად, ჩავთვალოთ, რომ გვაქვს [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}]. ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]. შეგიძლია გამოიყენო sort() ფუნქცია.

let objArr = [
    { name: 'avto', age: 20 },
    { name: 'beka', age: 19 },
    { name: 'goga', age: 21 }
]

const srt = (arr) => {
    return arr.sort(function ({ age: age1 } = arr, { age: age2 } = arr) {
        return age1 - age2
    })
}

console.log(srt(objArr));



