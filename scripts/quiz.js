const myQuestions = [{
  id: 1,
  question: "What is Javascript?",
  answers: [{
    a: "A framework",
    b: "A program language",
    c: "A web browser",
    d: "A type of function"
  }],
  correctAnswer: "A program language",
},
{
  id: 2,
  question: "Inside which HTML element do we put the JavaScript?",
  answers: [{
    a: "<javascript>",
    b: "<js>",
    c: "<script>",
    d: "<Jscript>"
  }],
  correctAnswer: "<script>",
},
{
  id: 3,
  question: "How do you call a function named 'fullName'?",
  answers: [{
    a: "call fullName",
    b: "fullName()",
    c: "call function fullName",
    d: "FULLNAME()"
  }],
  correctAnswer: "fullName()",
},
{
  id: 4,
  question: "How does a for loop start?",
  answers: [{
    a: "for(x = 0; x < 5; x++)",
    b: "for(x <= 5; x++)",
    c: "for(x = 0; x <= 5)",
    d: "4(i in loop)"
  }],
  correctAnswer: "for(x = 0; x < 5; x++)",
},
{
  id: 5,
  question: "How do you add a comment in JavaScript?",
  answers: [{
    a: "< !--This is a comment -- >",
    b: "'This is a comment'",
    c: "//This is a comment",
    d: "All the above."
  }],
  correctAnswer: "//This is a comment",
},
{
  id: 6,
  question: "How to insert a comment that has more than one line?",
  answers: [{
    a: "< !—This comment has more than one line -- >",
    b: "// This comment has more than one line //",
    c: "/* This comment has more than one line */",
    d: "** This comment has more than one line **"
  }],
  correctAnswer: "/* This comment has more than one line */",
},
{
  id: 7,
  question: "Which of the following is an example of an array",
  answers: [{
    a: 'function array() { console.log(array)};',
    b: 'var array = {Apple};',
    c: 'var array = ‘array’;',
    d: 'var array = [Apple, Banana, Strawberries];'
  }],
  correctAnswer: "var array = [Apple, Banana, Strawberries];",
},
{
  id: 8,
  question: "How do you write 'You Did It!' in an alert box",
  answers: [{
    a: 'alert("You Did It!");',
    b: 'alertBox("You Did It!");',
    c: 'myAlert("You Did It!");',
    d: 'myalertBox("You Did It!");'
  }, ],
  correctAnswer: 'alert("You Did It!");'
},
{
  id: 9,
  question: "How do you create a function in JavaScript",
  answers: [{
    a: "function = myFunction() {...}",
    b: "function: myFunction() {...}",
    c: "function myFunction() {...}",
    d: "myFunction{}"
  }],
  correctAnswer: "function myFunction() {...}",
},
{
  id: 10,
  question: "Which event occurs when the user click on an HTML element?",
  answers: [{
    a: "onmouseover",
    b: "onchange",
    c: "onmouseclick",
    d: "onclick"
  }],
  correctAnswer: "onclick",
}
];

// Post data binds
function QuizViewModel() {

var self = this;

self.count = ko.observable(1);
self.header = ko.observable('Javascript Quiz');
self.score = ko.observable('Score');
self.rank = ko.observable('Ranking');
self.ranking = ko.observable();
self.result = ko.observable('Results');
self.currentSlide = ko.observable(0);
// self.selectedValue = ko.observable();
self.questions = ko.observableArray(myQuestions);
$("#previous").hide();
$("#submit").hide();
$("#results").hide();
$("#quiz").show();

//REFRESH PAGE
self.add = function refreshPage() {
  window.location.reload();
};

//DISPLAY CURRENT QUESTION AND ANSWERS
self.currentQuestion = function() {
  let current = self.currentSlide();
  return self.questions()[current]
};

//PREVIOUS BUTTON
self.previousButton = function() {
  let current = self.currentSlide();
  if (current === 0) {
    $("#previous").hide();
  }
  if (!current <= 0) {
    current--;
    self.currentSlide(current);
  }
  //counter for going back
}

//NEXT BUTTON
self.nextButton = function() {
  $("#previous").show();
  let current = self.currentSlide();
  let count = self.count();
  if (current >= 0) {
    current++;
    self.currentSlide(current);
  }
  if (current >= 9) {
    $("#previous").hide();
    $("#next").hide();
    $("#submit").show();
  }
  // if (self.selectedValue === undefined) {
  //   alert("Must answer question to continue");
  //   self.currentSlide(current);
  // }

  //counter for right answers
  let numCorrect = self.count() + 1;
  if (self.selectedValue === self.questions()[current - 1].correctAnswer) {
    self.count(numCorrect)
    console.log("correct #: " + numCorrect);
  } else {
    console.log("wrong answer");
  }

  console.log("selectedValue: " + self.selectedValue);
  console.log("right answer: " + self.questions()[current - 1].correctAnswer);
  console.log("current slide#: " + current);
  // console.log(myQuestions.length)
};

//USERS SELECTED.
self.userSelected = function() {
  //console.log();
};

//USERS STORE
self.storeAnswer = function() {
  // var current = self.currentSlide();
  // self.questions(myQuestions);
};

//SHOW RESULTS
self.showResults = function() {
  $("#results").show();
  $("#quiz").hide();
  $("#submit").hide();

  let ranking = self.ranking("");
  let count = self.count()
  console.log("show result :" + count)
  if (count <= 5) {
    let ranking = self.ranking("Beginner");
    console.log(ranking);
  } else if (count <= 8 && count > 5) {
    let ranking = self.ranking("Novice");
    console.log(ranking);
  } else {
    let ranking = self.ranking("Expert");
    console.log(ranking);
  }
};
}
ko.applyBindings(new QuizViewModel());
