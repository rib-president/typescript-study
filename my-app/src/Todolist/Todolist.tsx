import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  key: string; // uuid
  todoText: string;
  isCompleted: boolean;
}

export function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      key: uuidv4(),
      todoText: "밥 먹기",
      isCompleted: false,
    },
    {
      key: uuidv4(),
      todoText: "숨쉬기",
      isCompleted: true,
    },
    {
      key: uuidv4(),
      todoText: "잠자기",
      isCompleted: false,
    },
  ]);

  // 1. todoList 입력을 받아서 추가할 수 있게
  // 2. Complete Click으로 완료할 수 있게
  return (
    <main className="container">
      <h1>해야할 일</h1>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault(); // 새로고침 방지
          if (inputValue !== "") {
            setTodoList([
              ...todoList,
              {
                key: uuidv4(),
                todoText: inputValue,
                isCompleted: false,
              },
            ]);

            setInputValue("");
          }
        }}
      >
        <fieldset role="group">
          <input
            type="text"
            name="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="해야할 일을 적어주세요"
          />
          <input type="submit" value="추가" />
        </fieldset>
      </form>
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li
              onClick={() => {
                console.log("click");
                const updatedTodoList = todoList.map((innerTodo) => {
                  return innerTodo.key === todo.key
                    ? { ...innerTodo, isCompleted: !todo.isCompleted }
                    : innerTodo;
                });
                setTodoList(updatedTodoList);
              }}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.todoText}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
