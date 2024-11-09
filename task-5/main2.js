/*
Task-3.
შექმენი quiz თამაში. დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით, სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი, არასწორი პასუხის შემთხვევაში გააწითლე. 
ბონუს დავალება: გამოიტანე ეკრანზე ქულების რაოდენობა. სწორი პასუხის შემთხვევაში დაამატე 1 ქულა, არასწორის შემთხვევაში ქულა უცვლელი რჩება.
*/

let body = document.body
let answer1 = document.getElementById('q1a3')
let answer2 = document.getElementById('q2a2')
let answer3 = document.getElementById('q3a1')
let checkBtn = document.getElementById('checkBtn')
let p = document.getElementById('showResult')

checkBtn.addEventListener('click', () => {
    // აქ ხდება შედეგის დათვლა
    let result = 0
    let point1 = answer1.checked ? 1 : 0
    let point2 = answer2.checked ? 1 : 0
    let point3 = answer3.checked ? 1 : 0

    result = point1 + point2 + point3

    // აქ ხდება შეტყობინების გამოტანა
    p.remove
    body.insertBefore(p,checkBtn.nextElementSibling)
    p.innerHTML = `შენ დააგროვე <span id="points">${result}</span> ქულა`
    
})
