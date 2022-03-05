/*function reloader() {
    location.reload()
}
setTimeout(reloader, 25000)*/

/*let reloader = () => {location.reload()}
        setTimeout(reloader, 25000)*/

//ACIMA SÃO TESTES BEM SUCEDIDOS DE SE REALIZAR UM RELOAD AUTOMÁTICO NA PÁGINA


function gerar() {
    let res = document.querySelector('div#res')
    
    let prova = res.querySelector('select#item')
    console.log(prova)

    if(prova !== null) {
        prova.remove()
    }
    let num = parseFloat(document.querySelector('input#num').value)
    console.log(num)
          
    let sel = document.createElement("select")
    res.appendChild(sel)
    sel.setAttribute('size', '10')
    sel.setAttribute('id', 'item')

    for(let cont=1; cont<=10; cont++) {
        let tab = cont*num        
        console.log(cont + 'x' + num + '=' + tab)

        let itens = document.createElement('option')
        itens.innerHTML = cont + '   x   ' + parseFloat(num) + '   =   ' + parseFloat(tab)
        item.appendChild(itens)
    }
}

function limpar() {
    let prova = res.querySelector('select#item')    
    prova.remove()
}