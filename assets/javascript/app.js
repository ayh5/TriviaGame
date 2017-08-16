var questions = [
        // Q1
        {
            q: "Who has the most wins in football?",
            c: ["George Halas", "Mike Tomlin", "Don Shula"],
            answer: "Don Shula"
        },
        //Q2
        {
            q: "Which NFL team features a helmet decal on only one side of the helmet?",
            c: ["Houston Texans", "Jacksonville Jaquars", "Pittsburgh Steelers"],
            answer: "Pittsburgh Steelers"
        },
        //Q3
        {
            q: "How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",
            c: ["2", "4", "6"],
            answer: "4"
        },
        //Q4
        {
            q: "Which of these teams was NOT an original NFL team that moved over to the AFC?",
            c: ["Raiders", "Browns", "Steelers"],
            answer: "Raiders"
        },
        //Q5
        {
            q: "Who is the only player enshrined in Canton AND in the CFL Hall of Fame?",
            c: ["Joe Theismann", "Warren Moon", "Doug Flutie"],
            answer: "Warren Moon"
        }
        
    ];


$("start-button").on("click", function(event) {
	trivia.start();
});

$(document).on("click", "#finished", function(event){
	trivia.finished();
});

var trivia = {
	correctCounter: 0,
	incorrectCounter: 0,
	counter: 25,

	countdown: function(){
		trivia.counter--;
		$("#counter-number").html(trivia.counter);

			if (trivia.counter === 0) {
				trivia.done();
			}
		}, //end countdown function

	start: function() {
    timer = setInterval(trivia.countdown, 1000);

    $("#timer").prepend('<h2>Seconds Left: <span id="counter-number">25</span> Seconds</h2>');
    $('#start-button').remove();


    for (var i = 0; i < questions.length; i++) {
      questionContainer.append("<h2>" + questions[i].q + '</h2>');
      for (var j = 0; j < questions[i].c.length; j++) {
        questionContainer.append('<input type="radio" name= "question' + '-' + i + '" value="' + questions[i].c[j] + '">' + questions[i].c[j]);
      }
    }

    questionContainer.append('<button id= "finished">Finished</button>');
  },

/*.each() method is designed to make DOM looping constructs concise and less error-prone. 
When called it iterates over the DOM elements that are part of the jQuery object. 
Each time the callback runs, it is passed the current loop iteration, beginning from 0. 
More importantly, the callback is fired in the context of the current DOM element, so the keyword this refers to the element.*/

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].answer) {
        trivia.correctCounter++;
      } else {
        trivia.incorrectCounter++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].answer) {
       trivia.correctCounter++;
      } else {
        trivia.incorrectCounter++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].answer) {
      trivia.correctCounter++;
      } else {
        trivia.incorrectCounter++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].answer) {
        trivia.correctCounter++;
      } else {
        trivia.incorrectCounter++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].answer) {
        trivia.correctCounter++;
      } else {
        trivia.incorrectCounter++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].answer) {
        trivia.correctCounter++;
      } else {
        trivia.incorrectCounter++;
      }
    });

    this.result();
};
    result: function() {
  
        	results.append('<h2>Correct: ' + this.correctCounter + '</h2>');
        	results.append('<h2>Incorrect: ' + this.incorrectCounter + '</h2>');
        }
 
};
