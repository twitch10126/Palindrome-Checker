const input = document.getElementById("text-input"); 
const button = document.getElementById("check-btn"); 
const result = document.getElementById("result");

function palindrome() {
  if (!input.value) {
    alert("Please input a value");
    return;
  }
  let input2 = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverse = input2.split("").reverse().join("");
  if (input2 === reverse) {
    result.innerText = `${input.value} is a palindrome`;
  }
  else {
    result.innerText = `${input.value} is not a palindrome`;
  }
}
button.addEventListener("click", palindrome);
