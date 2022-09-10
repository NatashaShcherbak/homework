function Button ({ type, text, onClick }) {
    return (
        <button type={type} onClick={onClick} className="todo__btn">{text}</button>
    )
}

export default Button;