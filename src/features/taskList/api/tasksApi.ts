import type { Task } from 'entities/task'
import { baseApi } from 'shared/api'

interface TaskDto {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'todos',
      transformResponse: (response: TaskDto[]): Task[] => 
         response.map(({ userId, id, title, completed }) => ({
          userId: String(userId),
          id: String(id),
          title,
          completed,
        })),
      providesTags: ['Tasks'],
    }),
  }),
})

export const { useGetTasksQuery } = tasksApi

