//Beginning Quiz
$(document).ready(function() {
    $("#mainbutton").click(function() {
    $(".mainpage").hide();
    $(".question").show();
    });
//Reloading Page
    $("#tryagain").click(function(newGame) {
      location.reload();
    });
//Questions Array
    var questions = [{
        question: "Question 1: What year did the American civil war end?",
        choices: ["200 B.C.", "1901", "2015", "1865"],
        qNum : 0,
        correct : 3,
        },
        {
        question: "Question 2: How long did the French Revolution last?",
        choices: ["2 Years", "10 Years", "3 Years", "9 Years"],
        qNum : 1,
        correct : 1,
        },
        {
        question: "Question 3: During the American civil war, who was at war?",
        choices: ["North and South", "East and West", "U.S. and Mexico", "England and U.S."],
        qNum : 2,
        correct : 0,
        },
        {
        question: "Question 4: Who won the American Revolution?",
        choices: ["Mexico", "Britain", "United States", "New York City"],
        qNum : 3,
        correct : 2,
        },
        {
        question: "Question 5: Who bombed Pearl Harbor?",
        choices: ["Japan", "China", "Norway", "Germany"],
        qNum : 4,
        correct : 0,
    }]
    var numCorrect = 0;
    var currQuestion = 0;
$(".question").on("click", "#submitanswer", function () {
    if (validateAnswer($("input[type='radio']:checked").val()) == 1) {
        updateanswer();
        currQuestion++;
        nextQuestion();
    }
    else {
        alert ("Please Select Answer");
    }
    });
    $(".question").on("click", "#tryagain", function () {
        numCorrect = 0;
        currQuestion = 0;
        var newQuestion = '<span class="questitle">'+questions[currQuestion].question+'</span><br><div id="possanswers"><input type="radio" name="option" class="option" value="0">'+questions[currQuestion].choices[0]+'<br><input type="radio" name="option" class="option" value="1">'+questions[currQuestion].choices[1]+'<br><input type="radio" name="option" class="option" value="2">'+questions[currQuestion].choices[2]+'<br><input type="radio" name="option" class="option" value="3">'+questions[currQuestion].choices[3]+'<br></div><button id="submitanswer">Submit Answer</button>';
        $(".question").html(newQuestion);
    });
    function validateAnswer(value) {
        var validAnswer = 0;
        if (typeof value != "undefined") {
            validAnswer = 1;
        }
        return validAnswer;
    }

    function updateanswer() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currQuestion].correct) {
            numCorrect++;    
        }
    }
    function nextQuestion() {
        if (currQuestion < 5) {
            $(".questitle").remove();
            $(".possanswers input").remove();
            var newQuestion = '<span class="questitle">'+questions[currQuestion].question+'</span><br><div id="possanswers"><input type="radio" name="option" class="option" value="0">'+questions[currQuestion].choices[0]+'<br><input type="radio" name="option" class="option" value="1">'+questions[currQuestion].choices[1]+'<br><input type="radio" name="option" class="option" value="2">'+questions[currQuestion].choices[2]+'<br><input type="radio" name="option" class="option" value="3">'+questions[currQuestion].choices[3]+'<br></div><button id="submitanswer">Submit Answer</button>';
            $(".question").html(newQuestion);
        }
        else {
            $(".questitle").remove();
            $(".possanswers input").remove();
            $("#submitanswer").css("display", "none");
            $(".question").html(newQuestion);
            if (numCorrect == 1) {
                var finalScore = 'Congratulations on finishing the quiz!  You correctly answered '+numCorrect+' question.';
                $(".finaloutput").html(finalScore);      
                $(".finalanswer").show();
                $(".finaloutput").show();
                $(".question").hide();
            }
            else {
                var finalScore = 'Congratulations on finishing the quiz!  You correctly answered '+numCorrect+' questions.';
                $(".finaloutput").html(finalScore);
                $(".finaloutput").show();
                $(".finalanswer").show();
                $(".question").hide();
            }
        }
    }

});