//Create questions as an Object. Follow example.
var questions = [
    {
      title: "Question 1: What symbol refers to an Id",
      choices: ["#", "$", ".", "{}"],
      answer: "#"
    },
    {
      title: "Example Question 2:",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "answer from choices"
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
  var timer = 90;
  //variable to store current index, will start at 0 to start with first question
  var index = 0;

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
    //show timer fxn
    timerEl.textContent = "90";
        // containerEl.appendChild(timerEl);
    //call next question function
    nextQuestion();
}

//FXN that handles timer
function showTimer() {
    //display timer
    timerDisplay.textContent = timer;
    //create setInterval and store it to a variable
    var timeInterval = setInterval(function () {
        document.querySelector(".timer").innerHTML=timer;
        timer--;
        // timerDisplay.textContent = timer;
    // if timer goes down to 0, must clear the variable to stop
        if(timer === 0) {
            clearInterval(timeInterval);
            alert("Out of time!");

        }
    }, 1000);
};

//FXN that goes to next question
function nextQuestion() {
//declare a variable to store the current questions, then assign it
    var currentQuestion = questions[index];
//clear container element so questions don't appear on next questions
    containerEl.textContent = "";
//add current question title to display the variable
    questionText.textContent = currentQuestion.title;
//append the question display to the container
    containerEl.appendChild(questionText);
//create a div element to wrap "choices"
    var answersDiv = document.createElement("div");
//for loop to:
    for (let index = 0; index < currentQuestion.choices.length; index++) {
    //create button elements for each loop
        var answerBtn = document.createElement("button");
    //add a class to each button to be used with eventListener
        answerBtn.classList.add("choiceBtn");
    //add text to each button from choces
        answerBtn.textContent = currentQuestion.choices[i];
    //append buttons to div element created to wrap choices
        answersDiv.appendChild(answerBtn);
    }


    //append div element to container
    containerEl.appendChild(answersDiv);

};

//FXN to check the answer and display to following question
function checkAnswer(event) {
//if event.target.matches
    if(event.target.matches(".choiceBtn")) {
    //logic to check for right answer
    index ++;
    nextQuestion()

    }


}





// =========================Event Listeners===================================================

  // add event listener to start quiz
  startBtn.addEventListener("click", startQuiz);
  // add event listener to start timer
  document.addEventListener("click", checkAnswer);

// timeInterval.addEventListener("click", startTimer);

  //call the functions
  openingPage()