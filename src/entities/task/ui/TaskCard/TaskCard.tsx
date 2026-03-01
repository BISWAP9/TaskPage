import type { Task } from 'entities/task/model/types'
import styles from './TaskCard.module.css'

export const TaskCard = ({ task }: { task: Task }) => (
    <article className={styles.card}>
      <span
        className={`${styles.status} ${task.completed ? styles.statusCompleted : ''}`}
      >
        {task.completed && "Ok"}
      </span>
      <h3 className={`${styles.title} ${task.completed ? styles.titleCompleted : ''}`}>
        {task.title}
      </h3>
    </article>
  )
