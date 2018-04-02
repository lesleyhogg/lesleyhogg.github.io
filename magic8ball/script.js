$(document).ready(function(){

  var magic8ball = {};
  magic8ball.listOfAnswers = ["Yeah probably.", "I guess so?", "Lookin' good!", "Hell yeah!", "Yeah dude.", "Uh, I dunno.", "I'm busy. Ask later.", "I don't think you want to know the answer to this.", "Who knows!", "Could you repeat that?", "Don't count on it.", "Hell no!", "It's not looking good for you.", "No bueno.", "I doubt it."];
	magic8ball.askQuestion = function(question) {
    $("#answer").fadeIn(4000);
		var randomIndex = Math.floor(Math.random() * this.listOfAnswers.length);
		var answer = this.listOfAnswers[randomIndex];
    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	};
  $("#answer").hide();

	var onClick = function() {
		$("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

    //shake that ball!
    $("#8ball").effect("shake");

    //half a second delay
    setTimeout(
      function() {
        //show prompt
        var question = prompt("What do you wish to know?");
        magic8ball.askQuestion(question);
      }, 500);

	};

	$("#questionButton").click(onClick);
});
