async function loadQuiz() {
  let res = await fetch('data/quiz.json');
  let quiz = await res.json();
  const list = document.getElementById('quizList');

  quiz.forEach((q, i) => {
    let div = document.createElement('div');
    div.innerHTML = `<p>${i+1}. ${q.question}</p>` + q.options.map(o => `<input type='radio' name='q${i}' value='${o}'> ${o}<br>`).join('');
    list.appendChild(div);
  });

  document.getElementById('submitQuiz').addEventListener('click', () => {
    let score = 0;
    quiz.forEach((q, i) => {
      let selected = document.querySelector(`input[name='q${i}']:checked`);
      if(selected && selected.value === q.answer) score++;
    });
    document.getElementById('quizResult').textContent = `You scored ${score} out of ${quiz.length}`;
  });
}
window.onload = loadQuiz;
