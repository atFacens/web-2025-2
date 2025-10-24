const id = document.getElementById('id')
const btn = document.getElementById('btnOK')
const out = document.getElementById('output')

function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users/' + id.value)
        .then((response) => {
            if(response.status == 404) {
                out.value = 'Usuário não encontrado'
            } else {
                out.value = response.json()
                .then((json)=> {
                    let dados = json['name'] + " - " + json['email']
                    out.value = dados
        } )
            }
        })
}

async function  getUser2() {
    response = await fetch('https://jsonplaceholder.typicode.com/users/' + id.value)

    if(response.status == 404) {
        out.value = 'Usuário não encontrado'
    } else {
        json = await response.json()
        let dados = json['name'] + " - " + json['email']
        out.value = dados
    } 
}

// btn.addEventListener('click', getUser)
btn.addEventListener('click', getUser2)

