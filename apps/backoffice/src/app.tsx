import { Route, Routes, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '@nx-base/auth';
import { routes } from './router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserState, userActions } from '@nx-base/accounts';
import { useOidc, useOidcAccessToken } from '@axa-fr/react-oidc';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(getUserState)
  const { pathname } = useLocation()
  const { isAuthenticated, login,  } = useOidc()
  const { accessToken, accessTokenPayload } = useOidcAccessToken()

  useEffect(() => {
    if (!isAuthenticated) {
      login('/home')
    }
  }, [isAuthenticated, login])


  useEffect(() => {
    if (accessToken && accessTokenPayload) {
      dispatch(userActions.setUser({
        user: accessTokenPayload,
        token: accessToken
      }))
    }
  }, [accessToken, accessTokenPayload, dispatch]);

  if (isLoading && !pathname.includes('authentication')) {
    return (
      <p>Loading…</p>
    )
  }

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoute>{route.component}</ProtectedRoute>}
          />
        )
      })}
    </Routes>
  );
}
