import { useMemo, useState } from 'react'
import type { Task } from 'entities/task/model/types.ts'

export type Filter = 'all' | 'completed' | 'incomplete'

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Пойти погулять', completed: false },
  { id: '2', title: 'Поесть', completed: true },
  { id: '3', title: 'Поспать', completed: true },
  { id: '4', title: 'Почитать книгу', completed: false },
  { id: '5', title: 'Посмотреть фильм', completed: false },
]

export const filterTasks = (tasks: Task[], filter: Filter): Task[] => {
  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed)
    case 'incomplete':
      return tasks.filter(task => !task.completed)
    default:
      return tasks
  }
}

export const taskFilters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'incomplete', label: 'Активные' },
  { value: 'completed', label: 'Завершённые' },
]

export const useTasks = (initialTasks: Task[] = INITIAL_TASKS) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filter, setFilter] = useState<Filter>('all')

  const filteredTasks = useMemo(() => filterTasks(tasks, filter), [tasks, filter])

  const removeTask = (taskId: string) => {
    setTasks(prev => prev.filter((task) => task.id !== taskId))
  }

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  }
}
