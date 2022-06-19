function FormValidate(form) {
    const _elements = form.elements;
    const _parentItemClass = 'form-control';
    const _errorWrapperClass = 'error';
    const _errorItemClass = 'error__item';
    const _successWrapperClass = 'success';
    let error = 0;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.checkFormElement();
        this.showForm();
    });
    this.checkFormElement = function () {
        for (let i = 0; i < _elements.length; i++) {
            const element = _elements[i];
            this.checkElement(element);
            const reqMessage = element.dataset.req;
            const emailMessage = element.dataset.email;
            const minLengthMessage = element.dataset.min_message;
            const passwordMessage = element.dataset.password;
            if (passwordMessage) {
                this.validPassword(passwordMessage);
            }
            if (reqMessage) {
                this.required(element, reqMessage);
            }
            if (emailMessage) {
                this.validEmail(element, emailMessage);
            }
            if (minLengthMessage) {
                this.minLength(element, minLengthMessage);
            }
            this.successTemplate(element);
        }
        return error;
    }

    this.validPassword = function (message) {
        const allPasswordElement = form.querySelectorAll("input[type='password']");
        Array.from(allPasswordElement).map(item => {
            if (allPasswordElement[0].value !== allPasswordElement[1].value) {
                this.errorTemplate(item, message);
            }
        })
    }

    this.required = function (element, message) {
        const notValidString = element.value.length === 0;
        const notValidCheckBox = element.type === 'checkbox' && element.checked === false;
        if (notValidString || notValidCheckBox) {
            this.errorTemplate(element, message);
        }
    }
    this.validEmail = function (element, message) {
        const emailString = element.value;
        const reg = emailString.match(/^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
        if (Boolean(reg) === false) {
            this.errorTemplate(element, message);
        }
    }

    this.minLength = function (element, message) {
        const minLength = element.dataset.min_length;
        const elementLength = element.value.length;
        const changeMassage = message.replace('N', minLength);
        if (elementLength < minLength) {
            this.errorTemplate(element, changeMassage);
        }
    }

    this.errorTemplate = function (element, message) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent.classList.contains(_errorWrapperClass) === false) {
            parent.classList.add(_errorWrapperClass);
            parent.insertAdjacentHTML('beforeend', `<small class="${_errorItemClass}">${message}</small>`);
            error++;
        }
    }

    this.checkElement = function (element) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent !== null && parent.classList.contains(_errorWrapperClass) === true) {
            parent.classList.remove(_errorWrapperClass);
            parent.querySelector(`.${_errorItemClass}`).remove();
            error--;
        }
    }

    this.successTemplate = function (element) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent !== null && parent.classList.contains(_errorWrapperClass) === false) {
            parent.classList.add(_successWrapperClass);
        } else if (parent !== null && parent.classList.contains(_errorWrapperClass) === true) {
            parent.classList.remove(_successWrapperClass);
        }
    }

    this.showForm = function () {
        error = this.checkFormElement();
        const userDataClear = Array.from(_elements).filter((item) => item.value !== '');
        const userData = Array.from(userDataClear).map(item => item.name + `: ` + item.value);
        if (error === 0) {
            console.log(form.method, form.action);
            console.log(userData);
            form.reset();
        }
    }
}

new FormValidate(document.querySelector('#form'));