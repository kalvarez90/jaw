(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    if (numCorrect <= 5){
      return document.getElementById('status').innerHTML="Beginner";
    }

    else if (numCorrect <=  8){
      return document.getElementById('status').innerHTML="Novice";
    }

    else if (numCorrect <=  10){
      return document.getElementById('status').innerHTML="JavaScript Expert";
    }

  };

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is Javascript?",
      answers : {
         a: "A framework",
         b: "A program language",
         c: "A web browser",
         d: "A type of function"
        },
        correctAnswer: "b"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers : {
           a: "< javascript >",
           b: "< js >",
           c: "< script >",
           d: "< Jscript >"
          },
          correctAnswer: "c"
        },
        {
          question: "How do you call a function named 'fullName'?",
          answers : {
            a: "call fullName",
            b: "fullName()",
            c: "call function fullName"
          },
             correctAnswer: "b"
            },
            {
            question: "How does a for loop start?",
            answers : {
               a: "for(x = 0; x < 5; x++)",
               b: "for(x <= 5; x++)",
               c: "for(x = 0; x <= 5)"
              },
              correctAnswer: "a"
            },
            {
              question: "How do you add a comment in JavaScript?",
              answers : {
                 a: "< !--This is a comment -- >",
                 b: "'This is a comment'",
                 c: "//This is a comment"
                },
                correctAnswer: "c"
              },
              {
                question: "How to insert a comment that has more than one line?",
                answers : {
                   a: "< !—This comment has more than one line -- >",
                   b: "// This comment has more than one line //",
                   c: "/* This comment has more than one line */"
                  },
                  correctAnswer: "c"
                },
                {
                  question: "JavaScript is the same as Java?",
                  answers : {
                     a: "True",
                     b: "False",
                    },
                    correctAnswer: "b"
                  },
                  {
                    question: "Is JavaScript case-sensitive?",
                    answers : {
                       a: "Yes",
                       b: "No",
                      },
                      correctAnswer: "a"
                    },
                    {
                      question: "How do you create a function in JavaScript",
                      answers : {
                         a: "function = myFunction() {...}",
                         b: "function: myFunction() {...}",
                         c: "function myFunction() {...}"
                        },
                        correctAnswer: "c"
                      },
                      {
                        question: `What will be the output of this code?
                        var x = 10 ;
                        if ( x > 5 ) {
                          let x = 1;
                        } else {
                          let x = 0
                        }
                        print (x)
                        `,
                        answers: {
                          a: "10",
                          b: "1",
                          c: "0"
                        },
                        correctAnswer: "a"
                      }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

// refresh Quiz page
function refreshPage(){
  window.location.reload();
} ;
