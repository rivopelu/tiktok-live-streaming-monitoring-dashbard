import { Route, Routes } from 'react-router-dom';
import { routeList } from './routes/route-list.ts';
import { MainProviders } from './providers/MainProviders.tsx';
import { ToastContainer } from 'react-toastify';

function App() {
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
        {routeList.map((item) => {
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
      </Routes>
    </>
  );
}

export default App;
