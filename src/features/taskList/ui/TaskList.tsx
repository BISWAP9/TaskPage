import { TaskCard } from 'entities/task'
import { DeleteButton, FilterButton } from 'shared/index'
import styles from './TaskList.module.css'
import { taskFilters, useTasks } from '../model/useTasks'

export const TaskList = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks()

  return (
    <>
      <div className={styles.filters}>
        {taskFilters.map(({ value, label }) => (
          <FilterButton key={value} active={filter === value} onAction={() => setFilter(value)} ariaLabel={`Фильтр: ${label}`}>
            {label}
          </FilterButton>
        ))}
      </div>
      {!tasks.length 
          ? (<div className={styles.emptyContainer}>
            <h3 className={styles.emptyText}> 
              {filter === 'all' ? 'Нет задач' : filter === 'completed' ? 'Нет завершённых задач' : 'Нет активных задач'}
              </h3>
            </div>)
            : ( <ul className={styles.list}>
              {tasks.map((task) => (
                <li key={task.id} className={styles.listItem}>
                    <TaskCard task={task} />
                    <DeleteButton onAction={() => removeTask(task.id)} />
                </li>
              ))}
          </ul>)}
    </>
  )
}
