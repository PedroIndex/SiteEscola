var tempoLimite = 20; // Tempo limite de resposta em segundos
var contador = tempoLimite;
var temporizador;
var respostas = []; // Array para armazenar as respostas do usuário
var perguntas = [
  {
    pergunta: 'Qual foi o time onde Lebron James estreiou?',
    opcoes: ['a)Cavaliers', 'b)Lakers', 'c)Celtics', 'd)Chicago B'],
    respostaCorreta: 'd'
  },
  {
    pergunta: 'Quem ganhou os play-offs da temporada 2023?',
    opcoes: ['a) flamengo', 'b) Vasco', 'c) internacional', 'd) Fluminense'],
    respostaCorreta: 'd'
  },
  {
    pergunta: 'Em que ano o brasil ganhou sua primeira copa',
    opcoes: ['a) 1958', 'b) 1970', 'c) 1962', 'd) 1994'],
    respostaCorreta: 'a'
  },
  {
    pergunta: 'Qual pais foi campeão da copa de 2006',
    opcoes: ['a) Brasil', 'b) França', 'c) Italia', 'd) Argentina'],
    respostaCorreta: 'c'
  },
  {
    pergunta: 'Em qual time neymar foi revelado',
    opcoes: ['a) Santos', 'b) Barcelona', 'c) Palmeiras', 'd) Flamengo'],
    respostaCorreta: 'a'
  },
  {
    pergunta: 'Quem ganhou a bola de ouro de 2015',
    opcoes: ['a) Cristiano Ronaldo', 'b) Messi', 'c) Neymar', 'd) Griezmann'],
    respostaCorreta: 'b'
  },
  {
    pergunta: 'Onde foi descoberto o futebol',
    opcoes: ['a) Brasil', 'b) Alemanha', 'c) França', 'd) Inglaterra'],
    respostaCorreta: 'd'
  },
  {
    pergunta: 'Quantas copas do mundo a Itália já ganhou',
    opcoes: ['a) 2', 'b) 4', 'c) 1', 'd) 3'],
    respostaCorreta: 'b'
  },
  {
    pergunta: 'Quantas Champions League tem o Real Madrid',
    opcoes: ['a) 9', 'b) 12', 'c) 14', 'd) 13'],
    respostaCorreta: 'c'
  },
  {
    pergunta: 'Qual foi o pais onde aconteceu a Copa do mundo de 2002?',
    opcoes: ['a) Alemanha', 'b) Brasil', 'c) Japão', 'd) Espanha'],
    respostaCorreta: 'c'
  }
];
var perguntaAtual = 0;

function responder() {
  clearInterval(temporizador); // Limpa o temporizador atual
  // Aqui você pode verificar a resposta escolhida pelo usuário
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
      respostaElement.innerHTML = 'Que pena, você errou. A resposta correta é ' + respostaCorreta + '.';
    }
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('resposta-container').style.display = 'block';
  } else {
    alert('Por favor, escolha uma opção.');
  }
}


function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    // Avança para a próxima pergunta
    document.getElementById('quizForm').reset(); // Reseta as opções
    document.getElementById('resposta').classList.remove('resposta-correta', 'resposta-incorreta');
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('resposta-container').style.display = 'none';
    document.querySelector('h1').innerHTML = 'Pergunta ' + (perguntaAtual + 1) + ':';
    document.querySelector('p').innerHTML = perguntas[perguntaAtual].pergunta;
    document.querySelector('input[value="a"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[0];
    document.querySelector('input[value="b"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[1];
    document.querySelector('input[value="c"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[2];
    document.querySelector('input[value="d"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[3];
    // Inicia o temporizador para a próxima pergunta
    contador = tempoLimite;
    document.getElementById('tempo').innerHTML = contador + 's';
    temporizador = setInterval(contarTempo, 1000);
  } else {
    // Exibe os resultados
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
    clearInterval(temporizador); // Limpa o temporizador atual
    responder(); // Passa para a próxima pergunta
  } else {
    document.getElementById('tempo').innerHTML = contador + 's';
    contador--;
  }
}



// Inicia o quiz com a primeira pergunta
document.querySelector('p').innerHTML = perguntas[perguntaAtual].pergunta;
document.querySelector('input[value="a"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[0];
document.querySelector('input[value="b"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[1];
document.querySelector('input[value="c"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[2];
document.querySelector('input[value="d"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[3];
document.getElementById('tempo').innerHTML = contador + 's';
temporizador = setInterval(contarTempo, 1000);
