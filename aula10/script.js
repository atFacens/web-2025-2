
const mypromese = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => resolve('Deu certo!'), 3000
        )
    }
)

const mypromese2 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => reject('Deu ruim!'), 3000
        )
    }
)

mypromese2.then(
    (msg) => console.log(msg)
).catch(
    (erro) => console.log(erro)
)