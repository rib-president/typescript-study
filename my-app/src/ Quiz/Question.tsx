interface QuestionProps {
  question: string;
  options: string[];
  handleAnswer: (answer: string) => void;
}

// props로 (attribute형태로) 입력을 받아서 컴포넌트를 그릴 수 있게 표현
export default function Question({
  question,
  options,
  handleAnswer,
}: QuestionProps) {
  return (
    <div>
      <h2>{question}</h2>
      <div className="grid">
        {options.map((option, index) => (
          <button
            onClick={() => {
              handleAnswer(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
