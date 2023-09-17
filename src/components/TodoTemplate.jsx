import React from "react"
import styles from "./TodoTemplate.module.css"

export default function TodoTemplate({ title }) {
	return <div className={styles.todoBar}>{title}</div>
}
