import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@nx-base/auth';
import { routes } from './router';

export default function App() {
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
