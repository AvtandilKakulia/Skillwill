/*
დაწერე ასინქრონული ფუნქცია, რომელიც არგუმენტად იღებს ობიექტს და აკეთებს deep copy-ს. ფუნქციამ უნდა გამოიძახოს reject თუ არგუმენტი არ არის ობიექტი. თუ ყველაფერი კარგად არის, გამოიძახოს resolve კოპირებული ობიექტით.
*/

const person = {
    id: 1,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
    contact: {
        email: "john.doe@example.com",
        phone: {
            home: "555-1234",
        }
    },
    hobbies: [
        {
            name: "Reading",
            details: {
                genre: "Science Fiction",
            }
        },
        {
            name: "Cycling",
            details: {
                duration: "1 hour",
            }
        }
    ],
    isEmployed: true,

};

async function deepCopyAsync(obj) {
    try {
        if (typeof obj !== 'object') throw Error('Argument is not an object!')

        let result = {}
        for (const name in obj) {
            if (typeof obj[name] === 'object') {
                if (Array.isArray(obj[name])) {
                    result[name] = await Promise.all(obj[name].map((el) => deepCopyAsync(el)))
                } else {
                    result[name] = await deepCopyAsync(obj[name])
                }
            } else {
                result[name] = obj[name]
            }
        }

        return result

    } catch (error) {
        console.log(error.message)
    }
}



async function call() {
    try {
        let copied = await deepCopyAsync(person)
        if (copied === undefined) {
            throw Error('Check provided object!')
        }
        console.log(copied);
    } catch (error) {
        console.log(error.message)
    }
}

call()






