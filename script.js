const questions = [
    {
      question: "Qual é a Arte Marcial mais praticada em nosso Brasil?",
      choices: ["Judô", "Karatê", "Jiu Jitsu", "Luta livre"],
      answer: "Jiu Jitsu",
    },
    {
      question: "Qual a graduação mais alta de faixa no Jiu Jitsu?",
      choices: ["Preta", "Vermelha", "Preta-Vermelha", "Vermelha-branca"],
      answer: "Vermelha",
    },
    {
      question: "Qual o nome da roupagem para prática do Jiu Jitsu?",
      choices: ["Kimono", "Wagi", "Casaco", "Malha"],
      answer: "Kimono",
    },
    {
      question: "Qual o tempo de luta na faixa Preta adulto?",
      choices: ["8 min", "10 min", "5 min", "20 min"],
      answer: "10 min",
    },
    {
      question: "Quantas faixas existem na categoria aduldo de Jiu Jitsu?",
      choices: ["seis", "oito", "cinco", "nove"],
      answer: "cinco",
    },
    {
      question: "Qual a técnica proibida no Jiu Jitsu esportivo?",
      choices: ["Montada", "Double-Leg", "Mão de vaca", "Bate-estaca"],
      answer: "Bate-estaca",
    },
    {
      question: "Qual família foi grande divulgadora do Jiu Jitsu?",
      choices: ["Lima", "Gracie", "Machado", "Soares"],
      answer: "Gracie",
    },
    {
      question: "Qual o nome abaixo não é uma equipe de Jiu Jitsu?",
      choices: ["GFTeam", "Alliance", "Cruz", "Gracie"],
      answer: "Cruz",
    },
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Pontuação: " + score;
      alert("Correto!");
    } else {
      wrong++;
      wrongElement.innerText = "Erros: " + wrong;
      alert(
        "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
      );
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, escolha uma resposta antes de prosseguir.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Fim do Quiz! Você acertou " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();