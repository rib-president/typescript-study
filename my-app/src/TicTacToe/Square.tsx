export type SquareValue = "O" | "X" | "-";
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

export function Square({ value, onClick }: SquareProps) {
  // 1. 비어있을 때는 -
  // 2. 누군가 클릭했을 때는 O, X
  // value값이 계족 바뀐다, click 이벤트가 있다
  let className = "outline";
  switch (value) {
    case "O":
      className = "";
      break;
    case "X":
      className = "secondary";
      break;
  }
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
