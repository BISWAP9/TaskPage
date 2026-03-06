import { useMemo, useState, useCallback } from 'react'
import type { Task } from 'entities/task/model/types.ts'

export type Filter = 'all' | 'completed' | 'incomplete'

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Пойти погулять', completed: false },
  { id: '2', title: 'Поесть', completed: true },
  { id: '3', title: 'Поспать', completed: true },
  { id: '4', title: 'Почитать книгу', completed: false },
  { id: '5', title: 'Посмотреть фильм', completed: false },
  { id: '6', title: 'Посмотреть видео', completed: false },
  { id: '7', title: 'Посмотреть канал', completed: false },
  { id: '8', title: 'Посмотреть фильм', completed: false },
  { id: '9', title: 'Посмотреть фильм', completed: false },
  { id: '10', title: 'Посмотреть фильм', completed: false },  
  { id: '11', title: 'Посмотреть фильм', completed: false },
  { id: '12', title: 'Посмотреть фильм', completed: false },
  { id: '13', title: 'Посмотреть фильм', completed: false },
  { id: '14', title: 'Посмотреть фильм', completed: false },
  { id: '15', title: 'Посмотреть фильм', completed: false },
  { id: '16', title: 'Посмотреть фильм', completed: false },
  { id: '17', title: 'Посмотреть фильм', completed: false },
  { id: '18', title: 'Посмотреть фильм', completed: false },
  { id: '19', title: 'Посмотреть фильм', completed: false },
  { id: '20', title: 'Посмотреть фильм', completed: false },
  { id: '21', title: 'Посмотреть фильм', completed: false },
  { id: '22', title: 'Посмотреть фильм', completed: false },
  { id: '23', title: 'Посмотреть фильм', completed: false },
  { id: '24', title: 'Посмотреть фильм', completed: false },
  { id: '25', title: 'Посмотреть фильм', completed: false },
  { id: '26', title: 'Посмотреть фильм', completed: false },
  { id: '27', title: 'Посмотреть фильм', completed: false },
  { id: '28', title: 'Посмотреть фильм', completed: false },
  { id: '29', title: 'Посмотреть фильм', completed: false },
  { id: '30', title: 'Посмотреть фильм', completed: false },
  { id: '31', title: 'Посмотреть фильм', completed: false },
  { id: '32', title: 'Посмотреть фильм', completed: false },
  { id: '33', title: 'Посмотреть фильм', completed: false },
  { id: '34', title: 'Посмотреть фильм', completed: false },
  { id: '35', title: 'Посмотреть фильм', completed: false },
  { id: '36', title: 'Посмотреть фильм', completed: false },
  { id: '37', title: 'Посмотреть фильм', completed: false },
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

  const removeTask = useCallback((taskId: string) => {
    setTasks(prev => prev.filter((task) => task.id !== taskId))
  }, [])

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  }
}
