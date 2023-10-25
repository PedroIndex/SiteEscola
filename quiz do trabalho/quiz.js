var tempoLimite = 20; // Tempo limite de resposta em segundos
var contador = tempoLimite;
var temporizador;
var respostas = []; // Array para armazenar as respostas do usuário
var perguntas = [


    {
        pergunta: 'Qual time é do Rio de Janeiro?',
        opcoes: ['a) São Paulo', 'b) Palmeiras', 'c) Santos', 'd) Flamengo'],
        imagem: 'pergunta1.webp',
        respostaCorreta: 'D'
    },
    {
        pergunta: 'Qual time não tem Libertadores?',
        opcoes: ['a) Flamengo', 'b) Vasco', 'c) Internacional', 'd) Fluminense'],
        imagem: 'pergunta2.jpg',
        respostaCorreta: 'D'
    },
    {
        pergunta: 'Em que ano o Brasil ganhou sua primeira Copa do Mundo?',
        opcoes: ['a) 1958', 'b) 1970', 'c) 1962', 'd) 1994'],
        imagem: 'pergunta3.jpg',
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual país foi campeão da Copa do Mundo de 2006?',
        opcoes: ['a) Brasil', 'b) França', 'c) Italia', 'd) Argentina'],
        imagem: 'pergunta4.jpg',
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Em qual time Neymar foi revelado?',
        opcoes: ['a) Santos', 'b) Barcelona', 'c) Palmeiras', 'd) Flamengo'],
        imagem: 'pergunta5.jpg',
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Que jogador ganhou a bola de ouro de 2015?',
        opcoes: ['a) Cristiano Ronaldo', 'b) Messi', 'c) Neymar', 'd) Griezmann'],
        imagem: 'pergunta6.jpg',
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Em qual país foi descoberto o futebol?',
        opcoes: ['a) Brasil', 'b) Alemanha', 'c) França', 'd) Inglaterra'],
        imagem: 'pergunta7.jpg',
        respostaCorreta: 'D'
    },
    {
        pergunta: 'Quantas copas do mundo a Itália já ganhou',
        opcoes: ['a) 2', 'b) 4', 'c) 1', 'd) 3'],
        imagem: 'pergunta8.jpg',
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Quantas Champions League tem o Real Madrid',
        opcoes: ['a) 9', 'b) 12', 'c) 14', 'd) 13'],
        imagem: 'pergunta9.jpeg',
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual foi o pais onde aconteceu a Copa do mundo de 2002?',
        opcoes: ['a) Alemanha', 'b) Brasil', 'c) Japão', 'd) Espanha'],
        imagem: 'pergunta10.jpeg',
        respostaCorreta: 'C'
    }

];

var perguntaAtual = 0;

function responder() {
    clearInterval(temporizador); // Limpa o temporizador atual
    var resposta = document.querySelector('input[name="opcao"]:checked');
    if (resposta) {
        respostas.push(resposta.value);
        var respostaCorreta = perguntas[perguntaAtual].respostaCorreta;
        var respostaUsuario = resposta.value;
        var respostaElement = document.getElementById('resposta');
        if (respostaUsuario === respostaCorreta) {
            respostaElement.classList.add('resposta-correta');
            respostaElement.innerHTML = 'Parabéns, você acertou!';
        } else {
            respostaElement.classList.add('resposta-incorreta');
            respostaElement.innerHTML = 'Que pena, você errou. A resposta: ' + respostaCorreta + '.';
        }
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('resposta-container').style.display = 'block';
    } 
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        document.getElementById('quizForm').reset();
        document.getElementById('resposta').classList.remove('resposta-correta', 'resposta-incorreta');
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('resposta-container').style.display = 'none';
        document.querySelector('h1').innerHTML = 'Pergunta ' + (perguntaAtual + 1) + ':';
        document.querySelector('img').src = 'imagem/' + perguntas[perguntaAtual].imagem;
        document.querySelector('p').innerHTML = perguntas[perguntaAtual].pergunta;
        document.querySelector('input[value="A"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[0];
        document.querySelector('input[value="B"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[1];
        document.querySelector('input[value="C"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[2];
        document.querySelector('input[value="D"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[3];
        contador = tempoLimite;
        document.getElementById('tempo').innerHTML = contador + 's';
        temporizador = setInterval(contarTempo, 1000);
    } else {
        var numRespostasCorretas = 0;
        for (var i = 0; i < perguntas.length; i++) {
            if (respostas[i] === perguntas[i].respostaCorreta) {
                numRespostasCorretas++;
            }
        }
        var resultado = 'Você acertou ' + numRespostasCorretas + ' de ' + perguntas.length + ' perguntas.';
        document.querySelector('h1').innerHTML = 'Resultado:';
        document.querySelector('p').innerHTML = resultado;
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('resposta-container').style.display = 'none';
        document.getElementById('resultado-container').style.display = 'block';
        document.getElementById('resultado').innerHTML = resultado;
    }
}

function contarTempo() {
    if (contador === 0) {
        clearInterval(temporizador);
       
        proximaPergunta();
    } else {
        document.getElementById('tempo').innerHTML = contador + 's';
        contador--;
    }
}

document.querySelector('p').innerHTML = perguntas[perguntaAtual].pergunta;
document.querySelector('img').src = 'imagem/' + perguntas[perguntaAtual].imagem;
document.querySelector('input[value="A"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[0];
document.querySelector('input[value="B"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[1];
document.querySelector('input[value="C"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[2];
document.querySelector('input[value="D"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[3];
document.getElementById('tempo').innerHTML = contador + 's';
temporizador = setInterval(contarTempo, 1000);