import React, { useState } from "react";
import { QuizQuestionType } from "../../../types/QuizType";

const QuizComponent: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(5);
  const [quiz, setQuiz] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<
    { selected: string; correct: string }[]
  >([]);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleGenerateQuiz = async () => {
    setLoading(true);
    setError("");
    setQuiz([]);
    setUserAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    /*
    try {
      const quizData = await generateQuiz({ topic, numberOfQuestions });
      setQuiz(quizData);
    } catch (err) {
      setError("Failed to generate quiz. Please try again.");
    } finally {
      setLoading(false);
    }
      */
  };

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = quiz[currentQuestionIndex];

    // Record the user's answer and the correct answer
    setUserAnswers((prev) => [
      ...prev,
      { selected: selectedOption, correct: currentQuestion.correctAnswer },
    ]);

    // Check if the selected option is correct and update the score
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // Move to the next question or show the results if it's the last question
    if (currentQuestionIndex + 1 < quiz.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setTopic("");
    setNumberOfQuestions(5);
    setQuiz([]);
    setUserAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  return (
    <div>
      <h1>Generate a Quiz</h1>
      {!quiz.length && (
        <div>
          <input
            type="text"
            placeholder="Enter topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of questions"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
          />
          <button onClick={handleGenerateQuiz} disabled={loading}>
            {loading ? "Generating..." : "Start Quiz"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      {quiz.length > 0 && !showResults && (
        <div>
          <h2>
            Question {currentQuestionIndex + 1} of {quiz.length}
          </h2>
          <p>{quiz[currentQuestionIndex].question}</p>
          <div>
            {Object.entries(quiz[currentQuestionIndex].options).map(
              ([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleOptionClick(key)}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    display: "block",
                  }}
                >
                  {value}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {showResults && (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score}/{quiz.length}
          </p>
          <h3>Review Your Answers</h3>
          <ul>
            {quiz.map((question, index) => (
              <li key={index}>
                <p>
                  <strong>Question:</strong> {question.question}
                </p>
                <ul>
                  {Object.entries(question.options).map(([key, value]) => (
                    <li
                      key={key}
                      style={{
                        color:
                          userAnswers[index].correct === key
                            ? "green"
                            : userAnswers[index].selected === key
                            ? "red"
                            : "black",
                      }}
                    >
                      {key}: {value}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Your Answer:</strong>{" "}
                  {question.options[userAnswers[index].selected]}{" "}
                  {userAnswers[index].selected === userAnswers[index].correct
                    ? "(Correct)"
                    : "(Incorrect)"}
                </p>
                <p>
                  <strong>Correct Answer:</strong>{" "}
                  {question.options[question.correctAnswer]}
                </p>
              </li>
            ))}
          </ul>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
