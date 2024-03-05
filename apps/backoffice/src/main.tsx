import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import { BrowserRouter } from 'react-router-dom';
import { LinkItem } from '@nx-base/contracts';
import { AuthenticationLayout } from '@nx-base/ui';
import { BackofficeLayout } from './layouts/backoffice_layout';
import App from './app';

const items: LinkItem[] = [
  {
    title: 'Home',
    icon: 'i-radix-icons-home',
    href: '/',
    exact: true,
  },
  {
    title: 'Accounts',
    icon: 'i-radix-icons-person',
    href: '/accounts/users',
    match: '/accounts',
    exact: false,
  },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AuthenticationLayout>
      <BrowserRouter>
        <BackofficeLayout items={items}>
          <App />
        </BackofficeLayout>
      </BrowserRouter>
    </AuthenticationLayout>
  </StrictMode>
);
