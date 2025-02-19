import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NotFoundPage } from './pages/public/NotFountPage.tsx';
import { MainProviders } from './providers/MainProviders.tsx';
import { useAuth } from './providers/UseAuth.tsx';
import { privateRoutes } from './routes/private-routes.ts';
import { publicRoute } from './routes/public-route.ts';

function App() {
  const auth = useAuth();
  const token = auth.token;
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {token
          ? privateRoutes.map((item) => {
              const Element = item.elements;
              return (
                <Route
                  id={item.route}
                  key={item.route}
                  path={item.route}
                  element={
                    <MainProviders type={item.type}>
                      <Element />
                    </MainProviders>
                  }
                />
              );
            })
          : publicRoute.map((item) => {
              const Element = item.elements;
              return (
                <Route
                  id={item.route}
                  key={item.route}
                  path={item.route}
                  element={
                    <MainProviders type={item.type}>
                      <Element />
                    </MainProviders>
                  }
                />
              );
            })}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
