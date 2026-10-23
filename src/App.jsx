
import { useState } from 'react'

const QuestionsArray = [
  {
    question: 'Is React a JavaScript library?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
      { text: 'Maybe', correct: false },
      { text: 'I do not know', correct: false }
    ]
  },
  {
    question: 'Is 2 + 2 equal to 5?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
      { text: 'Sometimes', correct: false },
      { text: 'I do not know', correct: false }
    ]
  },
  {
    question: 'Does useState help manage React state?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
      { text: 'Maybe', correct: false },
      { text: 'I do not know', correct: false }
    ]
  }
];

function App() {
  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [started, setStarted] = useState(false);

  function RightOrWrong(answer) {
    if (answer.correct) {
      setPoints(points + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  if (!started) {
    return (
      <div>
        <h1>My Quiz</h1>
        <button onClick={() => setStarted(true)}>
          Start!
        </button>
      </div>
    );
  }

  if (currentQuestion >= QuestionsArray.length) {
    return (
      <div>
        <h1>Quiz finished!</h1>
        <p>Your score: {points}/{QuestionsArray.length}</p>
        <button onClick={() => {
          setPoints(0);
          setCurrentQuestion(0);
          setStarted(false);
        }}>
          Play again
        </button>
      </div>
    );
  }

  const question = QuestionsArray[currentQuestion];

  return (
    <div>
      <h1>{question.question}</h1>

      <p>Score: {points}</p>

      {question.answers.map((answer) => (
        <button
          key={answer.text}
          onClick={() => RightOrWrong(answer)}
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
}

export default App