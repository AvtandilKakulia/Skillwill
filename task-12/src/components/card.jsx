const Card = ({name, image, action}) => {
    return (
        <div className="card">
            <h2> {name} </h2>
            <img src={image} alt={name} className="mainPoster"/>
            <button onClick={() => action(name)} className="btn">click</button>
        </div>
    )
}

export default Card