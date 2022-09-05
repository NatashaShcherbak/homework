function Input() {
    return (
        <label className="todo__label">
            <input type="text"
                   name="description"
                   className="todo__input"
                   placeholder="Your task ..."
            />
        </label>
    )
}

export default Input;