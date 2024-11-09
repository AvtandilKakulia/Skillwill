/* 
Task-1.
შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id. <div> - ში ჩაწერე პატარა random ტექსტი.ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი.
*/

// let body = document.body
// let btn = document.createElement('button')
// let div = document.createElement('div')
// let randText = 'This is random text.'

// btn.setAttribute('id','button')
// btn.style.display = 'block'
// btn.textContent = 'Click Me!'

// div.setAttribute('class','randText')

// div.append(randText,btn)
// body.append(div)

// btn.addEventListener('click', () => {
//     div.style.display = 'none'
// })


/* 
Task-2.
შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში:
<div id=”card”>
    <h2>Gandalf</h2> 
    <a href=”#”>Go to profile</a> 
</div>
*/

let body = document.body
let div = document.createElement('div')
let h2El = document.createElement('h2')
let aTag = document.createElement('a')

h2El.innerText = 'Gendalf'
div.setAttribute('id','card')
aTag.setAttribute('href','#')
aTag.innerText = 'Go to profile'

div.append(h2El,aTag)
body.append(div)






