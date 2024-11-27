const cards = document.querySelector('.cards')

const card = document.createElement('div')
card.setAttribute('class', 'card')

const cardsSectionImg = document.createElement('div')
cardsSectionImg.setAttribute('class', 'cardsSectionImg')

const imgForImgSection = document.createElement('img')
imgForImgSection.setAttribute('src', './img/space.jpeg')
imgForImgSection.setAttribute('alt', 'space')

const cardsSectionPost = document.createElement('div')
cardsSectionPost.setAttribute('class', 'cardsSectionPost')

const cardsSectionPostH2 = document.createElement('h2')
cardsSectionPostH2.innerText = 'Space tourism takes giant leap forward'

const cardsSectionPostSpan = document.createElement('span')
cardsSectionPostSpan.innerText = 'Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust s...'

const cardsSectionMore = document.createElement('div')
cardsSectionMore.setAttribute('class', 'cardsSectionMore')

const timer = document.createElement('div')
timer.setAttribute('class', 'timer')

const timerSpan = document.createElement('span')
timerSpan.innerText = 'This card will disappear in 15 seconds'

const seemore = document.createElement('div')
seemore.setAttribute('class', 'seemore')

const seemoreSpan = document.createElement('span')
seemoreSpan.innerText = 'See more'

const seemoreI = document.createElement('i')
seemoreI.setAttribute('class', 'fa-solid fa-angle-right')

seemore.append(seemoreSpan, seemoreI)
timer.append(timerSpan)
cardsSectionMore.append(timer, seemore)
cardsSectionPost.append(cardsSectionPostH2, cardsSectionPostSpan)
cardsSectionImg.append(imgForImgSection)
card.append(cardsSectionImg, cardsSectionPost, cardsSectionMore)

for (i = 0; i < 3; i++) {
    cards.append(card.cloneNode(true))
}


const logIn = document.querySelector('#LogIn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')

logIn.addEventListener('click', () =>{
    modal.classList.remove('dNone')
})

closeBtn.addEventListener('click', () =>{
    modal.classList.add('dNone')
})





