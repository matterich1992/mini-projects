//On submit return a function called submitAnswers

function submitAnswers () {
	var total = 5;
	var score = 0;

	//Get User-Input

	var q1 = document.forms['quizForm']['q1'].value; // linked to each value in the form radios
	var q2 = document.forms['quizForm']['q2'].value;
	var q3 = document.forms['quizForm']['q3'].value;
	var q4 = document.forms['quizForm']['q4'].value;
	var q5 = document.forms['quizForm']['q5'].value;


//alert(q1); to check if answers are being recorded correctly
//validation

for(var i=1;i<=total;i++){
	if(eval('q'+i)==null || eval('q'+i) == ''){
		alert('You missed question '+ i);
		return false;
 }
}
// Set Correct Answers
var answers = ["b","a","d","b","d"];

//Check the answers
/*for(var i =0;i<=total;i++){
	if(eval('q'+i)==answers[i-1]){
	score++;
}
}*/

if(q1==answers[0]){
	score++;
}

if(q2==answers[1]){
	score++;
}

if(q3==answers[2]){
	score++;
}

if(q4==answers[3]){
	score++;
}

if(q5==answers[4]){
	score++;
}

var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>'+ total+ '</span></h3>';

alert("You scored an " + (score/5*100)+'%');

return false; // not actually submitting the form
}