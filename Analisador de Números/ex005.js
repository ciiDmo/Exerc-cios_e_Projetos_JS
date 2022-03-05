
let reloader = () => {location.reload()}
setTimeout(reloader, 100000)

let vagas = []


function add() {
    let caixa = document.getElementById('num')
    let valor = parseFloat(caixa.value)
    let listagem = document.querySelector('select#lista')
    let informacao = document.getElementById('div2')

    informacao.innerHTML = ''

    if(vagas.includes(valor)) {
        alert ('Valor já existe.')
    } else if(caixa.value == '') {        
        alert ('Favor digite um valor. Sabe lê não?')
    }
    else {        
        document.getElementById('lista').style.display = 'flex'
        vagas.push(valor)
        let ultimo = vagas[(vagas.length-1)]
        let opcao = document.createElement("option")
        opcao.innerHTML = 'Valor ' + ultimo + ' adicionado.'
        listagem.appendChild(opcao)

        if(!document.getElementById('bot2')) {
            let calc = document.createElement("input")
            calc.setAttribute('type', 'button')
            calc.setAttribute('value', 'Calcular')
            calc.setAttribute('onclick', 'calcular()')
            calc.setAttribute('id', 'bot2')
            div2.appendChild(calc)
        }
    }
    caixa.focus()
    caixa.value = ''
    console.log(vagas)
}

function calcular() {
    let informacao = document.getElementById('div2')
    
    informacao.innerHTML = ''

    let somar = 0
    for(let i=0; i<vagas.length; i++) {
        somar = somar + vagas[i]
    }

    let min = Math.min(...vagas)    
    let max = Math.max(...vagas)

    let media = somar/(vagas.length)

    let qnt = document.createElement("p")
    let medres = document.createElement("p")
    let minres = document.createElement("p")
    let maxres = document.createElement("p")
    let somares = document.createElement("p")

    informacao.appendChild(qnt)
    informacao.appendChild(medres)
    informacao.appendChild(minres)
    informacao.appendChild(maxres)
    informacao.appendChild(somares)

    qnt.innerHTML = 'Ao todo temos, '+vagas.length+' números cadastrados.'
    medres.innerHTML = 'A média entre os elementos é '+media+'.'
    minres.innerHTML = 'O menor valor é '+min+'.'
    maxres.innerHTML = 'O maior valor é '+max+'.'
    somares.innerHTML = 'A soma dos números é um total de '+somar+'.'

    //console.log(min)
    //console.log(max)
    //console.log(media)
    //console.log(somar)
}


function remover() {
    let listagem = document.getElementById('lista')
    listagem.
    listagem.style.display = 'none'
    listagem.innerHTML = ''
    let calc = document.getElementById('div2')
    calc.innerHTML = ''
}
//console.log(!document.getElementById('bot2'))
/*
calc.remove()
opcao.remove()

*/