const birthdayInput = document.getElementById('birthday');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', () => {
  const birthDate = new Date(birthdayInput.value);
  const today = new Date();

  if (!birthdayInput.value || isNaN(birthDate.getTime()) || birthDate > today) {
    result.textContent = 'Please enter a valid date of birth';
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.textContent = `Your age is ${age} years old`;
});