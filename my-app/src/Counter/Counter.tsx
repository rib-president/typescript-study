import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  let count2 = 0;
  return (
    <main className="container">
      <h1>카운터 예제</h1>
      <h2>현재 카운트 : {count}</h2>
      <div className="grid">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          감소
        </button>
        <button
          onClick={() => {
            count2++;
          }}
        >
          증가2
        </button>
        <button
          onClick={() => {
            count2--;
          }}
        >
          감소2
        </button>
      </div>
    </main>
  );
}
