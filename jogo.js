

var altura= 0 
var largura = 0
var vidas = 1
var tempo = 15

//atribuindo niveis de dificuldade

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')


if (nivel === 'normal') {

//1500
criaMosquitoTempo = 1500

} 

else if (nivel === 'dificil') {

//1000
criaMosquitoTempo = 1000
}

else if (nivel === 'insano') {

//750
criaMosquitoTempo = 750

}

//

function ajustaTamanhoPalcoJogo() {
	
	 altura = window.innerHeight
	 largura = window.innerWidth

	 console.log(largura,altura)

}

ajustaTamanhoPalcoJogo()


// criando cronometro

var cronometro = setInterval(function () {

	tempo -= 1

	if (tempo<0) {

		clearInterval(cronometro) //para a execução do cronometro no loop
		clearInterval(criaMosquito) // para a criação de mosquito 
		window.location.href = 'vitoria.html'


	}

	else{
	document.getElementById('cronometro').innerHTML = tempo
	}

},1000)


//funcao criada para ser incluida no html apos o body ajudando no elemento img mosquito criado aqui.
function posicaoRandomica() {

//remover o mosquito anterior caso exista

if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento' +vidas)

		if (vidas>2) {

			window.location.href = 'fim_de_jogo.html'
		}

		else{

		document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"

		vidas++
	}
}



// criando valor randonico e limitando ele com posiçoes X,Y da pagina
// Math.floor arendoda o valor

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

// se posição X e Y for menor q 0 > recebe 0, se nao recebe a posição dela mesma
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY



console.log(posicaoX, posicaoY)


// criar elemento html e acessando elementos html
var mosquito = document.createElement('img')

mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function () {
	this.remove()
}

document.body.appendChild(mosquito)



}


//criando tamanhos variados mosquito

function tamanhoAleatorio() {

	var classe =Math.floor(Math.random() * 3)
	

	switch(classe){

		case 0:

			return 'mosquito1'

		case 1:

			return 'mosquito2'

		case 2:

			return 'mosquito3'


	}
}

//criando lado aleatorio mosquito


function ladoAleatorio() {

	var classe =Math.floor(Math.random() * 3)

switch(classe){

		case 0:

			return 'ladoA'

		case 1:

			return 'ladoB'


	
}

}

