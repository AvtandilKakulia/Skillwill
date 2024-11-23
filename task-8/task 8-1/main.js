/*
დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად:
ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)
*/


function powerOf(num, pow, cb) {
    if (pow === 0) return cb(1)

    if (pow > 0) {
        powerOf(num, pow - 1, (result) => {
            cb(result * num)
        })
    }

}

powerOf(2, 3, (res) => {
    console.log(res);
})















