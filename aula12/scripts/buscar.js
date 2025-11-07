const txt_id = document.getElementById('txtid')
const txt_username = document.getElementById('txtusername')
const txt_name = document.getElementById('txtname')
const txt_email = document.getElementById('txtemail')
const btnBuscar = document.getElementById('btnBuscar')


async function buscar(event) {
    event.preventDefault()

    let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${txt_id.value}`)

    if(resp.status == 200) {
        let dados = await resp.json()
        txt_username.value = dados['username']
        txt_name.value = dados['name']
        txt_email.value = dados['email']
    } else {
        alert(`Não encontrado: ${resp.status}`);
    }

}

btnBuscar.addEventListener('click', buscar)
