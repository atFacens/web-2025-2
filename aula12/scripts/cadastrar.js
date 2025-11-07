const id = document.getElementById('txtid')
const txt_username = document.getElementById('txtusername')
const txt_name = document.getElementById('txtname')
const txt_email = document.getElementById('txtemail')
const btnCadastrar = document.getElementById('btnCadastrar')


async function buscar(event) {
    event.preventDefault()

    let resp = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: txt_name.value,
                username: txt_username.value,
                email: txt_email.value,
            }),
        }
    )


    if(resp.status == 201) {
        let dados = await resp.json()
        id.value = dados['id']
    } else {
        console.log(`Erro: ${resp.status}`);
        
    }

}

btnCadastrar.addEventListener('click', buscar)
