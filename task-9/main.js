/*
- მოახდინე პროექტის ინიციალიზაცია. 
- დააინსტალირე პაკეტი validator. 
- მოიძიე validator-ის დოკუმენტაცია npmjs.com - ზე. 
- დოკუმენტაციის მიხედვით გამოიყენე ბრძანება isEmail და დაბეჭდე არის თუ არა შემდეგი სიტყვები მეილი:  test@test.com, abcDE123
*/

import validator from 'validator';

let a = 'test@test.com'
let b = 'abcDE123'

console.log(validator.isEmail(a));
console.log(validator.isEmail(b));
