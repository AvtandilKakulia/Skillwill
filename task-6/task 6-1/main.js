// შექმენი button, რომელზე დაწკაპების შემდეგაც გაიხსნება მოდალი და მოდალის უკან შავი/გამჭვირვალე background.

const clickBtn = document.querySelector('#clickBtn')
const box = document.querySelector('.box')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')


clickBtn.addEventListener('click', () =>{
    box.classList.add('dNone')
    modal.classList.remove('dNone')
})

closeBtn.addEventListener('click', () =>{
    box.classList.remove('dNone')
    modal.classList.add('dNone')
})
