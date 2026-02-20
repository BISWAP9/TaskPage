import { TaskPage } from 'pages/tasks'
import { Routes, Route } from 'react-router-dom'

export const Router = () => (
    <Routes>
      <Route path="/" element={<TaskPage />} />
    </Routes>
  )
