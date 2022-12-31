function ButtonPersonCard(prop) {
    return (
        <button onClick={prop.updateAge} className="btn-btn">Birthday Button for {prop.firstName} {prop.lastName}</button>
    )
}

export default ButtonPersonCard;