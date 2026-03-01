import { TaskWidget } from 'widgets/taskWidget'
import styles from './TaskPage.module.css'

export const TaskPage = () => (
    <main className={styles.taskPage}>
      <h1 className={styles.taskPageTitle}>Мои задачи</h1>
      <TaskWidget />
    </main>
  )
