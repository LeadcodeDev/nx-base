import { useOidc } from '@axa-fr/react-oidc';
import { PropsWithChildren, ReactNode } from 'react';

export function ProtectedRoute({ children }: PropsWithChildren): ReactNode {
  const { login, isAuthenticated } = useOidc()

  if (!isAuthenticated) {
    login('/')
    return null
  }

  return children
}
