function ButtonCardPersona(prop) {
    return (
        <button onClick={prop.updateAge} className="btn-btn">Birthday Button for {prop.friendlyName}</button>
    )
}

export default ButtonCardPersona;