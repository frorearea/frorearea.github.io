document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const status = form.querySelector(".form-status");
    status.textContent = "Thank you! Your message passed the form validation.";
    form.reset();
  });
});

const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");

if (quizForm && quizResult) {
  const correctAnswers = {
    q1: "html",
    q2: "grid",
    q3: "javascript"
  };

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!quizForm.checkValidity()) {
      quizForm.reportValidity();
      return;
    }

    const answers = new FormData(quizForm);
    let score = 0;

    Object.entries(correctAnswers).forEach(([question, correctAnswer]) => {
      if (answers.get(question) === correctAnswer) score += 1;
    });

    const feedback = score === 3
      ? "Excellent - you got everything right!"
      : score === 2
        ? "Good work - you are almost there."
        : "Keep learning and try again!";

    quizResult.textContent = `Your score is ${score} out of 3. ${feedback}`;
  });

  quizForm.addEventListener("reset", () => {
    quizResult.textContent = "Your result will appear here.";
  });
}
