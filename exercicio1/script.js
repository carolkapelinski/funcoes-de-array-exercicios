const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1
function funcao1(objeto){
    const novoObjeto = {}
    for (let i in objeto) {
        novoObjeto[i] = objeto[i].toUpperCase()
    }
    return novoObjeto
}

const objetoUpperCase = funcao1(infosPessoa/**objeto = infosPessoa */)
console.log(objetoUpperCase);


//2
const retornaTexto = (objeto) => {
    let texto = ""
    for(let i in objeto){
        texto += `O valor da propriedade ${i} é ${objeto[i]}.`
    }
    return texto
}
console.log(retornaTexto(infosPessoa))


//3
const recebeCallback = (objeto, funcao) => {
    const novoValor = funcao(objeto)
    console.log(novoValor);
}

recebeCallback(infosPessoa, funcao1)