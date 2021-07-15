
const magic8Ball = () => {
  //create an array of strings
  const responses = [
    "It is certain.",
    "Signs point to yes.",
    "Don't count on it.",
    "Very doubtful.",
    "Are you sure you want the answer?"
  ];
  //generate a random number between 0 and number of strings
  let randomIndex = Math.floor(Math.random() * responses.length);
  //return string of random index
  return responses[randomIndex];
};

//get the submit button
const submitButton = document.querySelector("#submit");
//runs when the button is clicked
submitButton.onclick = () => {
  let response = magic8Ball();
  let name = document.querySelector("#name").value;
  let question = document.querySelector("#question").value;

  let output = `Hi ${name}! The answer to "${question}" is: ${response}`;
  console.log(output);
  document.getElementById("answer").innerHTML = output;
};