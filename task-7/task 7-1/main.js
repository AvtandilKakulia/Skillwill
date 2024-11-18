// setTimeout ფუნქცია იყენებს callback-ს, დაწერეთ მისი promise-ზე დაფუძნებული ალტერნატივა. 
// მაგ: mySetTimeout(delay).then(...)

function timeDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('metia')
            } else {
                reject('naklebia')
            }
        }, delay);
    })
}

timeDelay(2000)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))



