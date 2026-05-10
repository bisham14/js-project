const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Au"],
    answer: "Au"
  },
    {
    category: "History",
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    category: "Geography",
    question: "What is the capital city of France?",
   choices: ["Berlin", "Madrid", "Paris"],
answer: "Paris"
  },
  {
    category: "Technology",
    question: "Which company developed the JavaScript programming language?",
    choices: ["Microsoft", "Google", "Netscape"],
    answer: "Netscape"
  },
  {
    category: "Literature",
    question: "Who is the author of 'Pride and Prejudice'?",
    choices: ["Emily Brontë", "Jane Austen", "Virginia Woolf"],
    answer: "Jane Austen"
  }

];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}
function getRandomComputerChoice (ansArray) {
  const randomIndex = Math.floor(Math.random() * ansArray.length);
  return ansArray[randomIndex];
}

function getResults(ques,compChoice){
  if(compChoice === ques.answer){
    return "The computer's choice is correct!";
  }else{
    return "The computer's choice is wrong. The correct answer is: "+ques.answer;
  }
}