import { TaskList } from 'features/taskList'
import styles from './TaskWidget.module.css'

export const TaskWidget = () => (
    <div className={styles.widgetContainer}>
        <TaskList/>
    </div>
)