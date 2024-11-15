// შექმენი input და button. input-ში მომხმარებელი ჩაწერს ფერს და button ღილაკზე დაწკაპების შემდეგ body-ს background შეიცვლება ჩაწერილ ფერად. (ფერები რომლის ჩაწერაც შეუძლია: red, blue, green, black, white). თუ სხვა ფერი ჩაწერა, გამოუტანე შეტყობინება alert-ის საშუალებით.

const wrapper = document.querySelector('.wrapper')
const colorInput = document.querySelector('[name="colorInput"]')
const button = document.querySelector('#button')
const colors = ['red', 'green', 'blue', 'black', 'white']

button.addEventListener('click', () => {
    let inputValue = colorInput.value

    if(colors.includes(inputValue)) {
        wrapper.style.backgroundColor = inputValue
    } else {
        window.alert('Allowed Colors are: red, green, blue, black and white')
    }
    
})




