import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from 'app/App'
import { AppProviders } from 'app/providers'

const root = createRoot(document.getElementById('root')!)

root.render(
  <AppProviders>
    <App />
  </AppProviders>,
)

