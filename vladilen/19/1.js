// using create element

const createUserForm = document.createElement('form')
      createUserForm.className = 'create-user-form'
document.body.append(createUserForm)

const submitBTN = document.createElement('button')
      submitBTN.type = 'submit'
      submitBTN.innerText = 'Подтвердить'

const addLabel = (labelText, inputType, inputName, inputPlaceholder) => {
    const label = document.createElement('label')
    label.innerText = labelText

    const input = document.createElement('input')
    input.type = inputType
    input.name = inputName
    input.placeholder = inputPlaceholder

    label.append(input)

    return label
}

createUserForm.append(addLabel('Имя', 'text', 'userName', 'Введите ваше имя'))
createUserForm.append(addLabel('Пароль', 'password', 'password', 'Придумайте Пароль'))
createUserForm.append(submitBTN)


// using innerHTML

document.body.innerHTML += `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`