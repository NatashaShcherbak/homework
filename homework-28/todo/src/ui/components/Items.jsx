import Button from "./Button";

function Items({ description }) {
    return (
        <div className="todo__item todo__item_row">
            <label className="todo__row">
                <input type="checkbox" />
                <p className="todo__text">{description}</p>
            </label>
            <Button text="Delete" />
        </div>
    )
}

export default Items;