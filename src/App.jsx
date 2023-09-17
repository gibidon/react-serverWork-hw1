import React from "react"
import { useEffect, useState } from "react"
import TodoTemplate from "./components/TodoTemplate.jsx"
import "./main.css"

const App = () => {
	const [todos, setTodos] = useState([])

	let todoElems = todos.map((todo) => (
		<TodoTemplate key={todo.id} title={todo.title} />
	))

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((todos) => todos.filter((todo) => todo.id < 10))
			.then((filteredTodos) => setTodos(filteredTodos))
			.catch((error) => console.log(error))
	}, [])

	return (
		<div className="container">
			<h1>ToDo list</h1>

			<div className="todo_main">{todoElems}</div>
		</div>
	)
}

export default App
