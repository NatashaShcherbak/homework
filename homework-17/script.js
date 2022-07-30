function Form(form) {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const postPlace = document.querySelector('.js--post');
    const commentsPlace = document.querySelector('.js--comments');
    let idPost = document.querySelector('.js--id');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (idPost.value >= 1 && idPost.value <= 100 && idPost.value !== '') {
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
            if (response.status === 200) {
                const titlePost = data.title;
                const bodyPost = data.body;
                postPlace.innerHTML = `
                    <p class="post__title post__text">${titlePost}</p>
                    <p class="post__text">${bodyPost}</p>`;
                return this.comments();
            }
        } catch {
            postPlace.innerHTML = 'ERROR';
        }
    }

    this.comments = async function() {
        try {
            const response = await fetch(`${url}${idPost.value}/comments`, {
                method: 'GET'
            })
            const data = await response.json();
            if(response.status === 200) {
                commentsPlace.innerHTML = '';
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
                    commentsPlace.insertAdjacentHTML('beforeend', template);
                }
                form.reset();
            }
        } catch {
            commentsPlace.innerHTML = 'ERROR';
        }
    }
}

new Form(document.querySelector('.js--form'));