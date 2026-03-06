import { useMemo, useState, useCallback, useEffect } from 'react'
import type { Task } from 'entities/task/model/types.ts'
import { useGetTasksQuery } from '../api/tasksApi'

export type Filter = 'all' | 'completed' | 'incomplete'

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

export const useTasks = () => {
  const { data: remoteTasks, isLoading, isError } = useGetTasksQuery()
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!isInitialized && remoteTasks) {
      setTasks(remoteTasks)
      setIsInitialized(true)
    }
  }, [remoteTasks, isInitialized])

  const filteredTasks = useMemo(() => filterTasks(tasks, filter), [tasks, filter])

  const removeTask = useCallback((taskId: string) => {
    setTasks(prev => prev.filter((task) => task.id !== taskId))
  }, [])

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
    isLoading,
    isError,
  }
}
