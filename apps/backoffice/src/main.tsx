import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import router from './router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
