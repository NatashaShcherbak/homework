function Button ({ text, onClick }) {
    return (
        <button onClick={onClick} className="todo__btn">{text}</button>
    )
}

export default Button;