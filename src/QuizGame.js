// src/QuizGame.js
import React, { useState } from 'react';
import { quizData } from './data';

function QuizGame({ backToHome }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // null, true, false

  const handleOptionClick = (option) => {
    if (selectedOption !== "") return; // 防止重複點擊

    setSelectedOption(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setIsCorrect(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedOption("");
    setIsCorrect(null);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>測驗結束！</h2>
          <div className="score-display">
            你的得分是：<span className="highlight-score">{score}</span> / {quizData.length}
          </div>
          <p>{score === quizData.length ? "太神了！你是資安大師！🎉" : "再接再厲，複習一下課程內容吧！💪"}</p>
          <div className="button-group">
            <button className="btn-primary" onClick={restartQuiz}>🔄 重新挑戰</button>
            <button className="btn-secondary" onClick={backToHome}>🏠 回到首頁</button>
          </div>
        </div>
      ) : (
        <div className="question-section">
          <div className="quiz-header">
            <span>單元 {currentQuestion + 1}/{quizData.length}</span>
            <button className="btn-small" onClick={backToHome}>離開</button>
          </div>
          <h3><span className="category-tag">{quizData[currentQuestion].category}</span></h3>
          <div className="question-text">{quizData[currentQuestion].question}</div>

          <div className="options-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option-btn ${selectedOption === option ? (isCorrect ? "correct" : "wrong") : ""} ${selectedOption !== "" && option === quizData[currentQuestion].answer ? "correct" : ""}`}
                disabled={selectedOption !== ""}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedOption && (
            <div className={`explanation-section ${isCorrect ? "success" : "error"}`}>
              <h4>{isCorrect ? "✅ 回答正確！" : "❌ 回答錯誤"}</h4>
              <p>{quizData[currentQuestion].explanation}</p>
              <button className="btn-primary next-btn" onClick={handleNextQuestion}>
                {currentQuestion === quizData.length - 1 ? "查看結果" : "下一題"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizGame;
