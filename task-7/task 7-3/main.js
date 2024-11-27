/* გამოიყენეთ პიველ დავალებაში შექმნილი ფუნქცია, რათა განავრცოთ ჩვენს მიერ დაწერილი Toy Shop შემდეგი იმპლემენტაციით:

 1. სათამაშოს დამზადებას სჭირდება 3 წამი. დროის მითითება შესაძლებელი უნდა იყოს დინამიურად.
 2. დავამატოთ ახალი ნაბიჯი რომელსაც დავარქმევთ deliverToys, რომლის დაყოვნებაც 2 წამია. (გადაეცემა დინამიურად)
 3. სათამაშოს გაყიდვას სჭირდება 1 წამი. (დინამიურად)

 ყოველი მომდევნო ნაბიჯი უნდა ელოდებოდეს წინა ნაბიჯის რეზულტატს და შესაბამისად წყვეტდეს მოხდება თუ არა მისი შესრულება. გამოიყენეთ then/catch და async/await სინტაქსები.(2 ვარიანტი)
 
 */


 function makeToys(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Toy is Undefected')
            } else {
                reject('Toy is Defected')
            }
        }, delay);
    })
}

function deliverToys(delay, status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'Toy is Undefected') {
                if (Math.random() > 0.1) {
                    resolve('Toy has been delivered')
                } else {
                    reject('Toy has not been delivered')
                }
            }
        }, delay);
    })
}

function sellToys(delay, status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'Toy has been delivered') {
                if (Math.random() > 0.3) {
                    resolve('Toy has been sold')
                } else {
                    reject('Toy was unsuccessful')
                }
            }
        }, delay);
    })
}

async function toyCircle() {
    try {
        const status = await makeToys(3000)
        console.log(status);
        const status2 = await deliverToys(2000, status)
        console.log(status2);
        const status3 = await sellToys(1000, status2)
        console.log(status3);
    } catch (error) {
        console.log(error);
    }
}

toyCircle()