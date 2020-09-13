// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');


function buildQuiz(){ }


function showResults(){ }

//displaying quiz right away
 buildQuiz();

 //When submitted, result will be shown
submitButton.addEventListener('click', showResults);

// Array of 10 Questions
var myQuestions = [
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
         a: "<javascript>",
         b: "<js>",
         c: "<script>",
         d: "<Jscript>"
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
               a: "<!--This is a comment -->",
               b: "'This is a comment'",
               c: "//This is a comment"
              },
              correctAnswer: "c"
            },
            {
              question: "How to insert a comment that has more than one line?",
              answers : {
                 a: "<!—This comment has more than one line -->",
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
                       a: "function = myFunction()",
                       b: "function: myFunction()",
                       c: "function myFunction()"
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
        ]
