import "./uiComponent.css"

const Card = ({ children, style }) => {
    return <div className="card-container" style={style}>
        {children}
    </div>

}

export default Card