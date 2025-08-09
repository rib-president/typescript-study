// 1. 보드 만들기
// 2. 보드를 Squre로 구성
// 3. Squre에 클릭이벤트 추가
// 4. Click이 되면 상태가 변경되고, 보드의 state 관리 필요
// 5. 보드에 승리 로직 추가

import { Board } from "./Board";

export function Game() {
  return (
    <main className="container">
      <h1>Tic-Tac-Toe</h1>
      <Board></Board>
    </main>
  );
}
