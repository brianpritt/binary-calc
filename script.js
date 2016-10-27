var userInput="1011";
var inputArray = userInput.split("");
var reverseInput = inputArray.reverse();
var total = 0;

for (i = (reverseInput.length -1); i > -1; i--){
var FirstOne
	var charI = parseInt(reverseInput[i]);
  if (charI === 1){
  	total += Math.pow(2,i);
  }
}
alert(total);
