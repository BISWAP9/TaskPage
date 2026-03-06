import { memo } from 'react'
import { TaskCard } from 'entities/task'
import { DeleteButton } from 'shared/index'
import styles from './TaskList.module.css'
import type { Task } from 'entities/task/model/types'

interface Props {
  task: Task
  onDelete: (id: string) => void
}

export const TaskListItem = memo(({ task, onDelete }: Props) => {
  const handleDelete = () => {
    onDelete(task.id)
  }

  return (
    <li className={styles.listItem}>
      <TaskCard task={task} />
      <DeleteButton onAction={handleDelete} />
    </li>
  )
})