function Input({ value, onChange }) {
    return (
        <div className="todo__label">
            <input type="text"
                   name="description"
                   className="todo__input"
                   placeholder="Your task ..."
                   defaultValue={value}
                   onChange={onChange}
            />
        </div>
    )
}

export default Input;