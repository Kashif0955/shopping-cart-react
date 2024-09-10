import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext.jsx'
import store from './redux-toolkit/store.js'
import { Provider } from 'react-redux'
import UserContextProvider from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      </UserContextProvider>
    </Provider>

  </StrictMode>,
)
