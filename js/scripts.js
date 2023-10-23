
String.prototype.split()

function convertToArray() {
  event.preventDefault();
  const formInput = document.getElementById("questionInput").value;
  const firstArray = formInput.split();
  // find any array element that is longer than 3 characters
  const newArray = firstArray.filter(word => word.length > 2);
  
  reverseAndDisplay(newArray);

  
    
}

function reverseAndDisplay(input) {
  let reversedArray = input.reverse();
  const resultDiv = document.getElementById("result");
  const resultText = document.createElement("p");
  resultText.append(reversedArray);
  resultDiv.append(resultText);
};

window.addEventListener("load", function() {
  this.document.getElementById("sentenceForm").addEventListener("submit", convertToArray);
});