import { useState } from 'react'


function App() {
  const [points, setPoints] = useState(0);
  const [answer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function RightOrWrong() {
    if (answer = true) {
      setPoints(points + 1)
    } else {
      setPoints(points + 0)
    }
  }

  function nextQuestion() {
    if (currentQuestion = 1) {
      const element = document.getElementById("SB");
      element.remove();
      
    }
  }

  return (
    <>
    <button onClick={() => setCurrentQuestion(currentQuestion + 1)} id='SB'>Start!</button>
    </>
  )
}

export default App
