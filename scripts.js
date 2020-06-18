//Create questions as an Object. Follow example.
var questions = [
    {
        title: "skip",
        choices: ["No"],
        answer: "0"
    },
    {
        title: "Question 1: What symbol refers to an Id?",
        choices: ["#", "$", ".", "{}"],
        answer: "0"
    },
    {
        title: "Question 2: If a statment gives an output of 'true', it is a(n):",
        choices: ["Object", "Number", "String", "Boolean"],
        answer: "3"
    },
    {
        title: "Question 3: What is the relational operator for not equal to?",
        choices: ["==/", "!=", "!==", "==!"],
        answer: "2"
    },
    {
        title: "Question 4: What is the type coercion priority order that Javascript follows?",
        choices: ["String, Boolean, Number", "Boolean, Number, String", "String, Number, Boolean"],
        answer: "2"
    },
    {
        title: "Question 5: What is the most current HTML format?",
        choices: ["3", "5", "6", "4"],
        answer: "1"
    }
  ];

  //hook elements from the page (ex. var exampleEL = document.querySelector)
  //Hook container element
  var containerEl = document.querySelector(".container");
  //Hook timer element
  var timerEl = document.querySelector(".timer");

  //=====================Creating dynamic elements ==============================================
    //create h1 to show starting heading
  var startText = document.createElement("h1");
  //create button to start quiz
  var startBtn = document.createElement("button");
  //create p tag to display question
  var questionText = document.createElement("p");
  
  //=========================Declaring global variables==========================================
  //variable to store timer #
  var timerLeft = 60;
  //variable to store current index, will start at 0 to start with first question
  var qindex = 0;
  var currentQuestion = -1;
  var score = 0;

  //=============================== Functions ===================================================

  //FXN that shows heading and loads page at start
function openingPage() {
  //add text to Title tag
        startText.textContent = "Welcome to the Quiz";
  //add text to button
        startBtn.textContent = "Start Quiz";
  //append text to container
        containerEl.appendChild(startText);
  //append button to container
        containerEl.appendChild(startBtn);
  }

//FXN that shows the question and starts the timer
function startQuiz() {
    qindex = 0;
    //show timer fxn
    showTimer();
    //call next question function
    nextQuestion();
}

//FXN that handles timer
function showTimer() {
    //display timer
    timerEl.textContent = timerLeft + " seconds left";
    timerLeft--;
    //create setInterval and store it to a variable
    var timeInterval = setInterval(function() {
            timerLeft--;
            timerEl.textContent = timerLeft + " seconds left";
  // if timer goes down to 0, must clear the variable to stop
            if (timerLeft === 0) {
                clearInterval(timeInterval);
                // endTimer();
            }    
    }, 1000);
};


//The timer ends when all questions have been answered or the timer reaches 0.
// function endTimer() {
//     clearInterval(timeInterval);

//     // score.textContent = 
 
// }

//FXN that goes to next question
function nextQuestion() {
//declare a variable to store the current questions, then assign it
    var currentQuestion = questions[qindex];
//clear container element so questions don't appear on next questions
    containerEl.textContent = "";
//add current question title to display the variable
    questionText.textContent = currentQuestion.title;
//append the question display to the container
    containerEl.appendChild(questionText);
//create a div element to wrap "choices"
    var answersDiv = document.createElement("div");
//for loop to:
    for (let insideLoop = 0; insideLoop < currentQuestion.choices.length; insideLoop++) {
    //create button elements for each loop
        var answerBtn = document.createElement("button");
    //add a class to each button to be used with eventListener
        answerBtn.classList.add("choiceBtn");
    //add text to each button from choices
        answerBtn.textContent = currentQuestion.choices[insideLoop];
    //append buttons to div element created to wrap choices
        answersDiv.appendChild(answerBtn);
    }

    //append div element to container
    containerEl.appendChild(answersDiv);

};

//FXN to check the answer and display to following question
function checkAnswer(event) {
    // if division line with p tag deplays correct answer
    console.log(`button text ${event.target.textContent}`);
    console.log(`actual answer ${questions[qindex].answer}`);
  
    if (event.target.textContent === questions[qindex].answer) {
        qindex++;
        score += 1;
        nextQuestion();
    }
    else {
//If a question is answered incorrectly, additional time is subtracted from the timer.
        qindex++;
        timerLeft -= 5;
        nextQuestion();
    }
 }




// After the game ends, the user can save their initials and score to a highscores view using local storage
function setScore() {
    localStorage.setItem("Score", score);
    localStorage.setItem("Initials", document.getElementById("initials").value);
    totalScore();
}      
function totalScore() {
    const one = (score) => {
        var totalScore = score + "final!";
        return totalScore;
    } 
    var endGame = (totalScore) => {
        score++;
    }
    totalScore = one("initials");
}




// =========================Event Listeners===================================================

  // add event listener to start quiz
  startBtn.addEventListener("click", startQuiz);
  // add event listener to start timer
  document.addEventListener("click", checkAnswer);

// timeInterval.addEventListener("click", startTimer);

  //call the functions
  openingPage()