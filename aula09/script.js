console.log('Script sendo carregado...');

const botaoOK = document.getElementById('btnOK')
const texto = document.getElementById('texto')
const formulario = document.getElementById('formulario')
const username = document.getElementById('username')

function acaoBotao() {
    console.log('Botão acionado'); 
}

botaoOK.addEventListener('click', acaoBotao)

texto.addEventListener('mouseenter', ()=> {
    texto.style.color = "red"
})

texto.addEventListener('mouseleave', ()=> {
    texto.style.color = "black"
})

formulario.addEventListener('submit' , (event)=> {
    event.preventDefault(); // evita o envio do formulário

    if(username.value == '') {
        alert('O campo username é obrigatório')
        return // termina a execução do método
    }
    console.log('Enviando o formulário....');

    if(username.value == 'emerson') {
        alert('Welcome!')
    }
})