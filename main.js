// დაწერე ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს “ტოლია” თუ a უდრის b-ს, ხოლო წინააღმდეგ შემთხვევაში, დააბრუნებს “არ არის ტოლი”. გაითვალისწინე, რომ a და b ყოველთვის ერთი და იგივე ტიპის არ არის.

// function isEqual(a, b) {
//     if (a === b) {
//         console.log("გადმოცემული არგუმენტები ტოლია!")
//     } else {
//         console.log("გადმოცემული არგუმენტები განსხვავება!")
//     }
// }

// isEqual(4,"4")

//დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰეიტებში და დააბრუნებს ტემპერატურას ცელსიუსში. თუ პარამეტრი არ არის რიცხვითი მონაცემი დააბრუნე - false.

// function f_to_celsius(fahrenheit) {
//     let result

//     if (typeof fahrenheit === "number") {
//         result = ((fahrenheit - 32) * 5) / 9
//     } else {
//         result = false
//     }

//     return result
// }

// console.log(f_to_celsius(78))

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), b (მეორე რიცხვი) და operation (+, -, *, /) და დააბრუნებს ახალ მნიშვნელობას რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით. თუ a და b არ არიან რიცხვები, ან თუ operation ცვლადში არის უცნობი, ოპერაცია დააბრუნე - false.

function MathOps(a, b, op) {
    let result

    if (typeof a !== "number" || typeof b !== "number") {
        result = false
    }
    else {
        if (op === "-" || op === "+" || op === "*" || op === "/") {
            if (op === "-") {
                result = a - b
            }
            if (op === "+") {
                result = a + b
            }
            if (op === "*") {
                result = a * b
            }
            if (op === "/") {
                result = a / b
            }
        } else {
            result = false
        }
    }

    return result
}

console.log(MathOps(4, 2, "*"))