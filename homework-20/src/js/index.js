function Tasks(input, todosWrapper) {
    this.input = document.querySelector(input);
    this.todosWrapper = document.querySelector(todosWrapper);

    this.addServerItem = async function (event) {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                "text": this.input.value,
                "checked": false,
            })
        })
        const dataItem = await response.json();
        this.todosWrapper.appendChild(this.createTemplate(
            dataItem.text,
            dataItem.checked,
            dataItem.id
        ))
        this.input.value = '';
    }

    this.complete = async function (description, id, item) {
        try {
            const checkBox = item.querySelector('.js--complete');
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": id,
                    "text": description,
                    "checked": checkBox.checked,
                })
            })
            if(response.status === 200) {
                const textDesc = item.querySelector('.js--desc');
                checkBox.checked ? textDesc.style.textDecoration = 'line-through' : textDesc.style.textDecoration = 'none';
            }
        } catch (error) {
            console.log(error);
        }
    }

    this.delete = async function(id, item) {
        try {
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            })
            if(response.status === 200) {
                item.remove();
            }
        } catch (error) {
            console.log(error);
        }
    }

    this.createTemplate = (description, checked, id) => { // TODO сказать про изменения
        const item = document.createElement('div');
        item.classList.add('todo-item');
        item.classList.add('js--todo-item');
        item.dataset.id = id;
        item.innerHTML = (
            `<label class="todo-item__label">
                <input type="checkbox" class="js--complete" ${checked ? 'checked="true"' : '' }>
                <p class="todo-item__desc js--desc">${description}</p>
             </label>
             <button class="form__button js--delete">Удалить</button>`
        );

        item.querySelector('.js--delete').addEventListener('click', () => this.delete(id, item));
        item.querySelector('.js--complete').addEventListener('click', () => this.complete(description, id, item));
        return item;
    }
}

Tasks.prototype.loadFromServer = async function () {
    const response = await fetch("http://localhost:3000/todos", {
        method: "GET"
    });
    const data = await response.json();
    data.forEach(dataItem => {
        this.todosWrapper.appendChild(this.createTemplate(
            dataItem.text,
            dataItem.checked,
            dataItem.id
        ))
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const task = new Tasks(
        '.js--form__input',
        '.js--todos-wrapper'
    );
    task.loadFromServer();
    const bindAddServerItem = task.addServerItem.bind(task);
    const form = document.querySelector('.js--form');
    form.addEventListener('submit', bindAddServerItem);
})