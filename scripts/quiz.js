// (function(){
//   // Functions
//   function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {

//         // variable to store the list of possible answers
//         const answers = [];

//         // and for each available answer...
//         for(letter in currentQuestion.answers){

//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="slide">
//             <div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join("")} </div>
//           </div>`
//         );
//       }
//     );

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }

  // function showResults(){

  //   // gather answer containers from our quiz
  //   const answerContainers = quizContainer.querySelectorAll('.answers');

  //   // keep track of user's answers
  //   let numCorrect = 0;

  //   // for each question...
  //   myQuestions.forEach( (currentQuestion, questionNumber) => {

  //     // find selected answer
  //     const answerContainer = answerContainers[questionNumber];
  //     const selector = `input[name=question${questionNumber}]:checked`;
  //     const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  //     // if answer is correct
  //     if(userAnswer === currentQuestion.correctAnswer){
  //       // add to the number of correct answers
  //       numCorrect++;

  //       // color the answers green
  //       answerContainers[questionNumber].style.color = 'green';
  //     }
  //     // if answer is wrong or blank
  //     else{
  //       // color the answers red
  //       answerContainers[questionNumber].style.color = 'red';
  //     }
  //   });

  //   // show number of correct answers out of total
  //   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  //   if (numCorrect <= 5){
  //     return document.getElementById('status').innerHTML="Beginner";
  //   }

  //   else if (numCorrect <=  8){
  //     return document.getElementById('status').innerHTML="Novice";
  //   }

  //   else if (numCorrect <=  10){
  //     return document.getElementById('status').innerHTML="JavaScript Expert";
  //   }

  // };

  // function showSlide(n) {
  //   slides[currentSlide].classList.remove('active-slide');
  //   slides[n].classList.add('active-slide');
  //   currentSlide = n;
  //   if(currentSlide === 0){
  //     previousButton.style.display = 'none';
  //   }
  //   else{
  //     previousButton.style.display = 'inline-block';
  //   }
  //   if(currentSlide === slides.length-1){
  //     nextButton.style.display = 'none';
  //     submitButton.style.display = 'inline-block';
  //   }
  //   else{
  //     nextButton.style.display = 'inline-block';
  //     submitButton.style.display = 'none';
  //   }
  // }

  // function showNextSlide() {
  //   showSlide(currentSlide + 1);
  // }

  // function showPreviousSlide() {
  //   showSlide(currentSlide - 1);
  // }

  // Variables
  // const quizContainer = document.getElementById('quiz');
  // const resultsContainer = document.getElementById('results');
  // const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      id: 1,
      question: "What is Javascript?",
      answers : [
        {
          a: "A framework",
          b: "A program language",
          c: "A web browser",
          d: "A type of function"
        }
      ],
      correctAnswer: "A program language",
      answerSelected: false
    },
    {
      id: 2,
      question: "Inside which HTML element do we put the JavaScript?",
      answers : [
        {
          a: "< javascript >",
          b: "< js >",
          c: "< script >",
          d: "< Jscript >"
        }
      ],
      correctAnswer: "< script >",
      answerSelected: false
    },
      {
      id: 3,
      question: "How do you call a function named 'fullName'?",
      answers : [
        {
          a: "call fullName",
          b: "fullName()",
          c: "call function fullName",
          d: "FULLNAME()"
        }
      ],
      correctAnswer: "fullName()",
      answerSelected: false
    },
    {
      id: 4,
      question: "How does a for loop start?",
      answers : [
        {
          a: "for(x = 0; x < 5; x++)",
          b: "for(x <= 5; x++)",
          c: "for(x = 0; x <= 5)",
          d: "4(i in loop)"
        }
      ],
      correctAnswer: "for(x = 0; x < 5; x++)",
      answerSelected: false
    },
    {
      id: 5,
      question: "How do you add a comment in JavaScript?",
      answers : [
        {
          a: "< !--This is a comment -- >",
          b: "'This is a comment'",
          c: "//This is a comment",
          d: "All the above."
        }
      ],
      correctAnswer: "//This is a comment",
      answerSelected: false
    },
    {
      id:6,
      question: "How to insert a comment that has more than one line?",
      answers : [
        {
          a: "< !—This comment has more than one line -- >",
          b: "// This comment has more than one line //",
          c: "/* This comment has more than one line */",
          d: "all the above"
        }
      ],
      correctAnswer: "/* This comment has more than one line */",
      answerSelected: false
    },
    {
      id: 7,
      question: "JavaScript is the same as Java?",
      answers : [
        {
          a: "True",
          b: "False",
          c: "",
          d: ""
        }
      ],
      correctAnswer: "False",
      answerSelected: false
    },
    {
      id: 8,
      question: "Is JavaScript case-sensitive?",
      answers : [
        {
          a: "Yes",
          b: "No",
          c: "",
          d: ""
        }
      ],
      correctAnswer: "Yes",
      answerSelected: false
    },
    {
      id: 9,
      question: "How do you create a function in JavaScript",
      answers : [
        {
          a: "function = myFunction() {...}",
          b: "function: myFunction() {...}",
          c: "function myFunction() {...}",
          d: "myFunction{}"
        }
      ],
      correctAnswer: "function myFunction() {...}",
      answerSelected: false
    },
    {
      id: 10,
      question: "Please add another qurestion",
      answers: [
        {
          a: "10",
          b: "1",
          c: "0",
          d: "11"
        }
      ],
      correctAnswer: "10",
      answerSelected: false
    }
    ];

    // Builds the Quiz
    // buildQuiz();

    // Pagination
    // const previousButton = document.getElementById("previous");
    // const nextButton = document.getElementById("next");
    // const slides = document.querySelectorAll(".slide");
    // let currentSlide = 0;

    // Show the first slide
    // showSlide(currentSlide);

    // Event listeners
  //   submitButton.addEventListener('click', showResults);
  //   previousButton.addEventListener("click", showPreviousSlide);
  //   nextButton.addEventListener("click", showNextSlide);
  // })();

  // refresh Quiz page
  // Post data binds
  function QuizViewModel(){
    var self = this;
    self.header = ko.observable('Javascript Quiz');
    self.score  = ko.observable('Score');
    self.rank  = ko.observable('Knowledge Rank');
    self.result  = ko.observable('Results');
    self.currentSlide = ko.observable(0);
    self.userAnswer = ko.observable();
    self.questions = ko.observableArray(myQuestions);
    $("#previous").hide();
    $("#submit").hide();

    // self.next = function(){
    //   var current = self.currentSlide();
    //   if current >= self.questions().length - 1 {
    //     self.showResults
    //   }
    // }
    self.add = function refreshPage(){
      window.location.reload();
    } ;
    //DISPLAY CURRENT QUESTION AND ANSWERSs
    self.currentQuestion = function() {
      let current = self.currentSlide();
      return self.questions()[current]
    };
    //PREVIOUS BUTTON
    self.previousButton = function(){
      let current = self.currentSlide();
      if (current === 0) {
        $("#previous").hide();
      }
      if (!current <= 0) {
        current--;
        self.currentSlide(current);
      }
      console.log(current);
    };
    //NEXT BUTTON
    self.nextButton = function(){
      $("#previous").show();
      let current = self.currentSlide();
      if (current >= 0) {
        current ++;
        self.currentSlide(current);
      }
      if (current >= 9) {
        $("#previous").hide();
        $("#next").hide();
        $("#submit").show();
      }
      console.log(current);
    };
    //USERS SELECTED.
    self.userSelected = function() {
      self.userAnswer(value);
    };
    //USERS STORE
    self.storeAnswer = function() {
      var current = self.currentSlide();
      myQuestions[current].answerSelected = true;
      self.questions(myQuestions);
      self.answerSelected.push(self.userAnswer());
    }
  }
  ko.applyBindings(new QuizViewModel());

