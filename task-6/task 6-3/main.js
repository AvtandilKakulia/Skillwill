const numberInput = document.querySelector('[name="numberInput"]')
const button = document.querySelector('#button')
const avgResult = document.querySelector('#avgResult')

button.addEventListener('click', () => {
    if (numberInput.value == '') {

    } else {
        let inputValueArr = numberInput.value.split(':')
        let numberedArr = []
        let result = 0

        inputValueArr.map((el) => {
            numberedArr.push(Number(el))
        })

        result = numberedArr.reduce((acc, num) => acc + num, 0) / numberedArr.length

        avgResult.innerText = `Average of provided numbers is ${result}`
    }

})