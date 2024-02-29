import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import App from './app'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
