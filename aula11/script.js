const inputId = document.getElementById('id')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const btnBuscar = document.getElementById('btnBuscar')
const btnListar = document.getElementById('btnListar')
const lista = document.getElementById('listaUsers')

btnBuscar.addEventListener('click', btnBuscarClick)
btnListar.addEventListener('click', btnListarClick)

async function btnBuscarClick() {
    let idUser = inputId.value
    let url = 'https://jsonplaceholder.typicode.com/users/' + idUser

    inputNome.value = 'Buscando...'
    inputEmail.value = ''

    let result = await fetch(url)

    if(result.status == 200) {
        let user = await result.json()
        inputNome.value = user['name']
        inputEmail.value = user['email']
    } else {
        inputNome.value = ''
        alert('Não encontrado')
    }
}

async function btnListarClick() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    inputNome.value = 'Buscando...'
    inputEmail.value = ''

    let result = await fetch(url)

    if(result.status == 200) {
        let users = await result.json()

        users.map(
            (user) => {
                let li =document.createElement('li')
                let nameUser = document.createElement('span')
                nameUser.innerHTML = user['name']
                li.appendChild(nameUser)
                lista.appendChild(li)
            }
        )
    } else {
        inputNome.value = ''
        alert('Não encontrado')
    }
}