var tempoLimite = 10; // Tempo limite de resposta em segundos
var contador = tempoLimite;
var temporizador;
var respostas = []; // Array para armazenar as respostas do usuário
var perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['a) Brasília', 'b) São Paulo', 'c) Rio de Janeiro', 'd) Belo Horizonte'],
    respostaCorreta: 'a'
  },
  {
    pergunta: 'Qual é a capital da França?',
    opcoes: ['a) Paris', 'b) Londres', 'c) Berlim', 'd) Roma'],
    respostaCorreta: 'a'
  },
  {
    pergunta: 'Qual é a capital do Japão?',
    opcoes: ['a) Tóquio', 'b) Osaka', 'c) Quioto', 'd) Yokohama'],
    respostaCorreta: 'a'
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
    document.getElementById('resposta-container').style.display = 'block';
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