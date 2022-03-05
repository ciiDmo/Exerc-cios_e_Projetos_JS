function sendInfo() {
    var coordinateX = document.getElementById("coordX").value
    var coordinateY = document.getElementById("coordY").value

    var coordRoverX = parseFloat(document.getElementById("coordXRover").value)
    var coordRoverY = parseFloat(document.getElementById("coordYRover").value)
    var coordCardial = document.getElementById("coordCardial").value

    switch(coordCardial) {
        case 'N':
            coordCardial = 1
            break;
        case 'E':
            coordCardial = 2
            break;
        case 'S':
            coordCardial = 3
            break;
        case 'W':
            coordCardial = 4
            break;
        default:
            break;
    }

    var valorMoves = document.getElementById("move").value
    let tamanhoMoves = valorMoves.length
    let i = 0

    while(i<=tamanhoMoves-1) {
        const move = valorMoves.substr(i, 1)
        console.log(move)
        i++
        if(move=='L') {coordCardial = (coordCardial<=1 ? coordCardial=4 : coordCardial-=1)}
        else if(move=='R') {coordCardial = (coordCardial>=4 ? coordCardial=1 : coordCardial+=1)}
        else if(move=='M') {
            if(coordCardial==1) {
                coordRoverY+=1
            } else if (coordCardial==2) {
                coordRoverX+=1
            } else if (coordCardial==3) {
                coordRoverY-=1
            } else if (coordCardial==4) {                
                coordRoverX-=1
            }
        }
    }
    if(coordRoverY>coordinateY || 
        coordRoverX>coordinateX || 
        coordRoverY<1 || 
        coordRoverX<1) {
        alert(`As movimentações inseridas excedem o tamanho do platô, 
            quando executadas! Favor reinseri-las.`)
    }else {
        switch(coordCardial) {
            case 1:
                coordCardial = 'N'
                break;
            case 2:
                coordCardial = 'E'
                break;
            case 3:
                coordCardial = 'S'
                break;
            case 4:
                coordCardial = 'W'
                break;
            default:
                break;
        }
        
        let resultados = document.getElementById("result")

        let resultadoX = document.createElement('div')
        resultados.classList.add('MyClass')
        resultadoX.innerHTML = `Coordenada X: ${coordRoverX}`
        resultados.appendChild(resultadoX)

        let resultadoY = document.createElement('div')
        resultados.classList.add('MyClass')
        resultadoY.innerHTML = `Coordenada Y: ${coordRoverY}`
        resultados.appendChild(resultadoY)

        let resultadoC = document.createElement('div')
        resultados.classList.add('MyClass')
        resultadoC.innerHTML = `Coordenada cardial: ${coordCardial}`
        resultados.appendChild(resultadoC)

        console.log(`X final ${coordRoverX}`)
        console.log(`Y final ${coordRoverY}`)
        console.log(`Cardial final ${coordCardial}`)
    }
}