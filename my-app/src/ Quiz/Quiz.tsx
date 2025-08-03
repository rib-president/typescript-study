import { useState } from "react";
import Question from "./Question";

export function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: "리액트를 만든 회사는?",
      options: ["페이스북", "구글", "네이버", "카카오"],
      answer: "페이스북",
    },
    {
      question: "타입스크립트는 어떤 언어의 슈퍼셋인가요?",
      options: ["자바스크립트", "파이썬", "루비", "코틀린"],
      answer: "자바스크립트",
    },
    {
      question: "TSX는 무엇을 확장한 파일 형식인가요??",
      options: ["js", "html", "css", "ts"],
      answer: "ts",
    },
    {
      question: "서울은 대한민국의 수도인가요?",
      options: ["네", "아니오"],
      answer: "네",
    },
  ];
  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1); // 맞추면 score + 1
      console.log("정답!!");
    } else {
      console.log("오답!!");
    }
    setCurrentQuestion(currentQuestion + 1); // 답을 할 때마다 다음 퀴즈로 넘어감
  };
  // 조건부 렌더링
  return (
    <main className="container">
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        ></Question>
      ) : (
        <>
          <h2>당신의 최종 점수는? {score} 입니다.</h2>
          <button
            onClick={() => {
              // 퀴즈를 리셋할 때는 index와 score를 0으로 초기화
              setScore(0);
              setCurrentQuestion(0);
            }}
          >
            퀴즈 다시 하기
          </button>
        </>
      )}
    </main>
  );
}
