window.onload = () => {

    let name = document.getElementById("name");
    name.addEventListener('change', () => {
        if (/^[a-zа-яё]{2,30}$/i.test(name.value)) {
            name.setCustomValidity("");
            name.style.border = "1px solid green";
        } else {
            console.log(name.value);
            name.setCustomValidity("Имя должно содержать только буквы");
            name.style.border = "1px solid red";
        }
    }, false);

    let phone = document.getElementById("phone");
    phone.addEventListener('change', () => {
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value)) {
            phone.setCustomValidity("");
            phone.style.border = "1px solid green";
        } else {
            console.log(phone.value);
            phone.setCustomValidity("Номер телефона содержит 11 цифр");
            phone.style.border = "1px solid red";
        }
    }, false);

    let email = document.getElementById("email");
    email.addEventListener('change', () => {
        if (/^([a-zA-Z0-9\.\-_]+)@([a-zA-Z]{2,})\.([a-zA-Z]{2,})$/.test(email.value)) {
            email.setCustomValidity("");
            email.style.border = "1px solid green";
        } else {
            console.log(email.value);
            email.setCustomValidity("E-mail в формате mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru");
            email.style.border = "1px solid red";
        }
    }, false);

    let message = document.getElementById("message");
    message.addEventListener('change', () => {
        if (/^[^\<\>\[\]%\&'`]+$/.test(message.value)) {
            message.setCustomValidity("");
            message.style.border = "1px solid green";
        } else {
            console.log(message.value);
            message.setCustomValidity("Сформулируйте свою мысль, не используя символы &, %, <, /, >, ^, ', `");
            message.style.border = "1px solid red";
        }
    }, false);

    function validateInput(nameInput) {
        switch (nameInput) {
            case 'name':
                {
                    if (/^[a-zа-яё]{2,30}$/i.test(document.getElementById("name").value)) return true;
                    break;
                }
            case 'phone':
                {
                    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(document.getElementById("phone").value)) return true;
                    break;
                }
            case 'email':
                {
                    if (/^([a-zA-Z0-9\.\-_]+)@([a-zA-Z]{2,})\.([a-zA-Z]{2,})$/.test(document.getElementById("email").value)) return true;
                    break;
                }
            case 'message':
                {
                    if (/^[^\<\>\[\]%\&'`]+$/.test(document.getElementById("message").value)) return true;
                    break;
                }
            default:
                return false;
        }

    }

    function validateForm() {
        if ((validateInput("name")) && (validateInput("phone")) && (validateInput("email")) && (validateInput("message")))
            return true;
        else return false;
    }

    //Обработчик на кнопку "Отправить"
    document.getElementById('myform').addEventListener('submit', e => {
        e.preventDefault(); // отмена отправки формы
        if (validateForm()) {
            document.getElementById('myform').submit();
        }
    });

}
