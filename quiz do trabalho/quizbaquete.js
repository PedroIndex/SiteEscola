var tempoLimite = 20; // Tempo limite de resposta em segundos
var contador = tempoLimite;
var temporizador;
var respostas = []; // Array para armazenar as respostas do usuário
var perguntas = [


    {
        pergunta: 'Qual é o jogador acima?',
        opcoes: ['a) Stephen Curry', 'b)Jayson Tatum', 'c) Lebron James', 'd) Kevin Durant'],
        imagem: 'Kevin Durant.webp',
        respostaCorreta: 'D' //Kd
    },
    {
        pergunta: 'Quem deixou Michael Jordan perdido no crossover?',
        opcoes: ['a) Allen Iverson', 'b) Kyrie Irving', 'c) Shaq O´neal', 'd) Magic Jhonson'],
        imagem: '2.jfif',
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Quantas cestas de 3 pontos Shaq O´neal fez ao total em sua carreira da NBA?',
        opcoes: ['a) 5', 'b) 2', 'c) 1', 'd) 3'],
        imagem: 'shaq.jfif',
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual a marca patrocinadora das bolas da NBA?',
        opcoes: ['a) Nike', 'b) Spalding', 'c) Penalty', 'd) Wilson'],
        imagem: 'bola nba.jfif',
        respostaCorreta: 'D'
    },
    {
        pergunta: ' Em que ano Ja Morant foi draftado?',
        opcoes: ['a) 2018', 'b) 2017', 'c) 2019', 'd) 2020'],
        imagem: 'ja morant.jfif',
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual o time atual de Kyrie Irving?',
        opcoes: ['a)Maveric Dallas', 'b) Boston Celtics', 'c) Clivers', 'd) Brooklyn Nets'],
        imagem: 'kyrie irving.jfif',
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual é o jogador acima?',
        opcoes: ['a)Antony Davis ', 'b) Steve Adams ', 'c) Myles Turner', 'd) Kevin Love'],
        imagem: 'steve adamns.jfif',
        respostaCorreta: 'B' //steve adams
    },
    {
        pergunta: 'Quantos títulos da NBA Kobe Bryant já conquistou?',
        opcoes: ['a) 2', 'b) 3', 'c) 4', 'd) 5'],
        imagem: 'kobe.jfif',
        respostaCorreta: 'D'
    },
    {
        pergunta: 'Quantas vezes Kobe Bryant foi MVP?',
        opcoes: ['a) 3', 'b) 1', 'c) 2', 'd) 0'],
        imagem: 'kobemvp.jpg',
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Quem é o maior cestinha da NBA?',
        opcoes: ['a) Stephen Curry', 'b)LeBron James ', 'c)Kareem Abdul-jb', 'd) Michael Jordan'],
        imagem: 'pontos.jpg',
        respostaCorreta: 'B'
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