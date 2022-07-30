function Form(form) {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    let idPost = document.querySelector('.js--id');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (idPost.value > 1 && idPost.value < 100 && idPost.value !== '') {
           return this.post();
        } else {
            alert("Wrong! Let's write a number from 1 to 100");
            form.reset();
        }
    })

    this.post = async function() {
        try {
                const response = await fetch(`${url}${idPost.value}`, {
                    method: 'GET'
                })
                const data = await response.json();
                const titlePost = data.title;
                const bodyPost = data.body;
                document.querySelector('.js--post').innerHTML = `
                <p class="post__title post__text">${titlePost}</p>
                <p class="post__text">${bodyPost}</p>`;
                return this.comments();
        } catch {
            document.querySelector('.js--post').innerHTML = 'ERROR';
        }
    }

    this.comments = async function() {
        try {
            const response = await fetch(`${url}${idPost.value}/comments`, {
                method: 'GET'
            })
            const data = await response.json();
            for (let elem of data) {
                const name = elem.name;
                const email = elem.email;
                const bodyComments = elem.body;
                const template = `
                    <li class="comments__item">
                        <p class="comments__text comments__text_uppercase">${name}</p>
                        <p class="comments__text comments__text_orange">${email}</p>
                        <p class="comments__text">${bodyComments}</p>
                    </li>`
                document.querySelector('.js--comments').insertAdjacentHTML('beforeend', template);
            }
            if(response.status === 200) form.reset();
        } catch {
            document.querySelector('.js--comments').innerHTML = 'ERROR';
        }
    }
}

new Form(document.querySelector('.js--form'));