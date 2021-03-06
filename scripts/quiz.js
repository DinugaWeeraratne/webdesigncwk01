var questions = ["1. Which Liverpool star also played for Southampton and Celtic?", "2. Which team has won the most FA Cup trophies?", "3. Where in France was the 2019 Women’s World Cup final played?", "4. Which club did Man. United sign Anthony Martial from?", "5. Which country do Orlando Pirates play in?", "6. At which club did Aaron Ramsey begin his career?", "7. Which Match of the Day pundit did NOT play for Liverpool and Spurs?", "8. What do the initials VAR mean in football?", "9. Which trophy is contested between the Prem and FA Cup winners?", "10. What is the nickname of Bournemouth?"];
var choices2 =
    [["Sadio Mane", "Adam Lallana", "Virgil van Dijk", "3"],
    ["Arsenal", "Man United", "Chelsea", "1"],
    ["Stade De Lyon", "Parc Des Princes", "Allianz Riviera", "1"],
    ["Monaco", "Marseille", "Lille", "1"],
    ["USA", "South Africa", "Poland", "2"],
    ["Blackburn", "Swansea", "Cardiff", "3"],
    ["Ian Wright", "Peter Crouch", "Danny Murphy", "3"],
    ["Very Awful Reaction", "Video Assistant Referee", "Video Action Replay", "2"],
    ["Club World Cup", "Community Shield", "EFL Trophy", "2"],
    ["The Berries", "The Nuts", "The Cherries", "3"]];

var score = 0;
var questionNumber = 0;
var selectAnswer = 0;


window.onload = function () {
    score = 0;
    questionText.innerHTML = questions[0];
    choicesText.innerHTML = ("<input onclick=setSelectedAnswer(1) name=choices type=radio />" + choices2[0][0] + "<br/>  <input onclick=setSelectedAnswer(2) name=choices type=radio />" + choices2[0][1] + "<br/> <input onclick=setSelectedAnswer(3) name=choices type=radio />" + choices2[0][2] + "<br/> ")
    clickButton.innerHTML = "<button onclick=nextQuestion(0)>Submit</button>";
}
function nextQuestion(questNumber) {
    addScore(selectAnswer, choices2[questNumber][3])
    questNumber = questNumber + 1;
    questionText.innerHTML = questions[questNumber];
    choicesText.innerHTML = ("<input onclick=setSelectedAnswer(1) name=choices type=radio />" + choices2[questNumber][0] + "<br/>  <input onclick=setSelectedAnswer(2) name=choices type=radio />" + choices2[questNumber][1] + "<br/> <input onclick=setSelectedAnswer(3) name=choices type=radio />" + choices2[questNumber][2] + "<br/>")
    clickButton.innerHTML = "<button onclick=nextQuestion(0)>Submit</button>";
    if (questions.length == (questNumber + 1)) {
        clickButton.innerHTML = "<button onclick=finish(" + questNumber + ")>Finish</button>";
    } else {
        clickButton.innerHTML = "<button onclick=nextQuestion(" + questNumber + ")>Next</button>";
    }

}
function addScore(choiceNumber, answerNumber) {
    if (choiceNumber == answerNumber) {
        score = score + 2;
    } else {
        score = score - 1;
    }

}

function setSelectedAnswer(answer) {
    selectAnswer = answer;
}


function finish(questNumber) {
    addScore(selectAnswer, choices2[questNumber][4])
    questionText.innerHTML = "End of Quiz";
    choicesText.innerHTML = "";
    commentText.innerHTML = "Your score is: " + score;
    clickButton.innerHTML = "<button onclick=repeat001()>Repeat</button>";
}

function finishTimeUp() {
    questionText.innerHTML = "End of Quiz";
    choicesText.innerHTML = "";
    commentText.innerHTML = "Your score is: " + score;
    clickButton.innerHTML = "<button onclick=repeat001()>Repeat</button>";
}

function repeat001() {
    location.reload();
}


// Set the date we're counting down to
var countDownDate = new Date().getTime() + 15 * 60 * 1000;

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (hours != "-1")
        document.getElementById("demo").innerHTML = "Time left: " + minutes + ":" + seconds;



    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        finishTimeUp(0);
    }
}, 1000);