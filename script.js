$(document).ready(function(){

const quizData = [
{Q: "Alice in Wonderland", A: "The Evil Queen", B: "Queen of Hearts", C: "Prince John", correctAnswer: "B"},
{Q: "Hercules", A: "Yzma", B: "Sid", C: "Hades", correctAnswer:"C"},
{Q: "The Lion King", A: "Scar", B: "Clayton", C: "Gaston", correctAnswer:"A"},
{Q: "The Little Mermaid", A: "Captain Hook", B: "Captain Collision", C: "Ursula", correctAnswer:"C"},
{Q: "101 Dalmatians", A: "Dr. Hämsterviel", B: "Cruella de Vil", C: "Facilier", correctAnswer:"B"},
{Q: "Up", A: "Charles Muntz", B: "Henry Waternoose", C: "Edgar Balthazar", correctAnswer:"A"},
{Q: "Sleeping Beauty", A: "Lady Tremaine", B: "Mother Gothel", C: "Maleficent", correctAnswer:"C"},
{Q: "A Bug's Life", A: "Hopper", B: "Professor Ratigan", C: "Governor Ratcliffe", correctAnswer:"A"},
{Q: "Pinocchio", A: "Frollo", B: "Stromboli", C: "Jafar", correctAnswer:"B"},
{Q: "The Incredibles", A: "Vector", B: "Skinner", C: "Sydrome", correctAnswer:"C"}
]

let userInput = null
let score = 0
let indexCounter = -1
let click = false

//1. capture user input (click event)
//2. check user input with answers
//3. display correct or incorrect
//4. if correct, score + 1
//5. update the question
//6. repeat

//get the userInput value
$('.answerBox').on('click', function() {
	userInput = (this.id)
	if (click === true) {
		checkAnswer()
	}
});

//check if userInput equals to answers array
function checkAnswer() {
	click = false
	if (userInput === quizData[indexCounter].correctAnswer) {
		score = score + 1;
		$('.result').text(`That is correct!`);
		$('.score').text(`You are ${score*10}% evil.`);
	} else {
		$('.result').text(`That is incorrect.`);
	}
}

$('.next').on('click', function() {
	//update the index
	indexCounter = indexCounter + 1
	$('.questionBox').removeClass('flex')
	//check for end of game
	if (indexCounter === quizData.length) {
		$('.answers').hide();
		$('.next').hide();
		$('.score').hide();
		$('.result').hide();
		$('.questionBox').addClass('flex')
		if (score < 4) {
			$('.questionTitle').text(`Just a little mischievious`);
			$('.question').text(`Your score: ${score}`);
		} else if (5 < score && score < 7) {
			$('.questionTitle').text(`Your inner monster is showing`);
			$('.question').text(`Your score: ${score}`);
		} else {
			$('.questionTitle').text(`You're an evil genius!`);
			$('.question').text(`Your score: ${score}`);
		}
	} else {
		click = true
		$('.questionTitle').text(`Question ${indexCounter + 1}`);
		$('.question').text(`${quizData[indexCounter].Q}`);
		$('.answers').css("display", "flex");
		$('.answers #A').text(`${quizData[indexCounter].A}`);
		$('.answers #B').text(`${quizData[indexCounter].B}`);
		$('.answers #C').text(`${quizData[indexCounter].C}`);
		$('.result').text(``);
	}
});


});
