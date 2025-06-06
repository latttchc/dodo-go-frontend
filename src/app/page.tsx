"use client"

import { useEffect, useState } from "react"
import axios from "axios"

type Todo = {
  id: number
  title: string
  completed: boolean
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get<Todo[]>("http://localhost:8080/todos");
      setTodos(res.data);
    } catch (error) {
      console.error("Failed to fetch todos:", error)
    }
  };

  const handleAddTodo = async () => {
    try {
      await axios.post("http://localhost:8080/todos", {
        title: newTitle,
        completed: false
      })

      setNewTitle("")
      // 全部取得
      fetchTodos()
    } catch (error) {
      console.error("Failed to add todo:", error)
    }
  }

  const handleDeleteTodo = async (todo: Todo) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${todo.id}`)
      fetchTodos()
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }

  const handleToggleCompleted = async (todo: Todo) => {
    try {
      await axios.put(`http://localhost:8080/todos/${todo.id}`, {
        title: todo.title,
        completed: !todo.completed
      })
      fetchTodos()
    } catch (error) {
      console.error("Failed to delete todo:", error)
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-center text-white mb-6">
        🫠TODO LISTTTT
      </h1>
      {/* 入力フォーム */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="新しいTodoを入力..."
          className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          追加
        </button>
      </div>

      {/* Todo一覧 */}
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* チェックボックス */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo)}
              disabled={todo.completed}
              className="w-5 h-5 mr-4 accent-green-500 disabled:opacity-100 disabled:cursor-not-allowed"
            />
            <div className="flex items-center">
              <span className="text-lg font-medium text-white">
                {todo.title}
              </span>
            </div>
            {/* 削除ボタン */}
            <button
              onClick={() => handleDeleteTodo(todo)}
              className={`px-3 py-1 rounded-full text-sm font-semibold text-white`}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}