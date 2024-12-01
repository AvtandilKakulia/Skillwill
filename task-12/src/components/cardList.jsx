import Card from "./card"
import imgOne from "../assets/1.jpg"
import imgTwo from "../assets/2.jpg"
import imgThree from "../assets/3.jpg"
import imgFour from "../assets/4.jpg"

const data = [
    { id: 1, name: "The Uncommoners Series", image: imgOne },
    { id: 2, name: "An Epic Series of Failures Series", image: imgTwo },
    { id: 3, name: "The Secrets of the Immortal Nicholas Flamel Series", image: imgThree },
    { id: 4, name: "Gifted Clans Series", image: imgFour }
]

const CardList = () => {
    function action(name) {
        alert(`That's a great choice: ${name}`)
    }

    return (
        <div className="cardList">
            {data.map((card) => <Card key={card.id} name={card.name} image={card.image} action={action} />)}
        </div>
    )
}

export default CardList