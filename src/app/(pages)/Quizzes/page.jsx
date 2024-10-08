"use client";
import React, { useState } from 'react';

const QuizCard = ({ title, description, onStartQuiz }) => {
  return (
    <div className="quiz-card bg-white rounded-lg shadow-lg p-6 m-4 hover:shadow-xl transition-shadow duration-200 ease-in-out">
      <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button 
        onClick={onStartQuiz} 
        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
        Start Quiz
      </button>
    </div>
  );
};

const Quiz = ({ quizData, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-section p-6 bg-white rounded-lg shadow-lg">
      {showScore ? (
        <div className="score-section text-center text-black">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Quiz Results</h2>
          <p className="text-lg text-green-700">Correct answers: {score}</p>
          <p className="text-lg text-green-700">Wrong answers: {wrongAnswers}</p>
          <p className="text-lg text-green-700">Total questions: {quizData.length}</p>
          <p className="text-lg font-semibold text-green-900">
            Percentage Score: {((score / quizData.length) * 100).toFixed(2)}%
          </p>
          <button 
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            onClick={onBack}>
            Back to Quizzes
          </button>
        </div>
      ) : (
        <div>
          <div className="question-section mb-6">
            <h2 className="text-2xl font-bold mb-4 text-green-900">
              Question {currentQuestion + 1} of {quizData.length}
            </h2>
            <p className="text-lg mb-6 text-green-700">{quizData[currentQuestion].question}</p>
          </div>
          <div className="options-section grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerOptionClick(option)}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = [
    {
      title: "Plant Identification",
      description: "Test your knowledge about different medicinal plants.",
      quizData: [
        {
          question: "Which plant is known for promoting relaxation and aiding sleep?",
          options: ["Giloy", "Chamomile", "Turmeric", "Moringa"],
          answer: "Chamomile"
        },
        {
          question: "Which plant is primarily used to boost immunity and treat fever?",
          options: ["Amla", "Giloy", "Chamomile", "Turmeric"],
          answer: "Giloy"
        },
        {
          question: "Which plant is known for its antibacterial properties and is commonly used to treat wounds?",
          options: ["Aloe Vera", "Basil", "Neem", "Moringa"],
          answer: "Neem"
        },
        {
          question: "Which plant helps in improving digestion and is often used in herbal teas?",
          options: ["Peppermint", "Turmeric", "Giloy", "Chamomile"],
          answer: "Peppermint"
        },
        {
          question: "Which plant is also referred to as 'Indian Gooseberry' and is rich in Vitamin C?",
          options: ["Amla", "Giloy", "Tulsi", "Neem"],
          answer: "Amla"
        }
      ]
    },
    {
      title: "Herbal Medicine",
      description: "Learn more about the medicinal uses of different plants.",
      quizData: [
        {
          question: "Which plant contains curcumin and is known for its anti-inflammatory properties?",
          options: ["Moringa", "Giloy", "Turmeric", "Chamomile"],
          answer: "Turmeric"
        },
        {
          question: "Which plant is used to prevent hair loss and promote hair growth?",
          options: ["Chamomile", "Amla", "Giloy", "Moringa"],
          answer: "Amla"
        },
        {
          question: "Which herb is known for its strong antioxidant properties and is often called the 'Holy Basil'?",
          options: ["Tulsi", "Aloe Vera", "Chamomile", "Neem"],
          answer: "Tulsi"
        },
        {
          question: "Which plant is used as a natural sweetener and is commonly used to treat diabetes?",
          options: ["Stevia", "Giloy", "Aloe Vera", "Peppermint"],
          answer: "Stevia"
        },
        {
          question: "Which plant is well-known for improving brain function and reducing stress?",
          options: ["Ashwagandha", "Amla", "Tulsi", "Moringa"],
          answer: "Ashwagandha"
        }
      ]
    }
  ];

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="quiz-page-container p-6">
      {selectedQuiz ? (
        <Quiz quizData={selectedQuiz.quizData} onBack={handleBackToQuizzes} />
      ) : (
        <div className="quiz-cards grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz, index) => (
            <QuizCard
              key={index}
              title={quiz.title}
              description={quiz.description}
              onStartQuiz={() => handleStartQuiz(quiz)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
