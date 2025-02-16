import { Route, Routes } from 'react-router-dom';
import { routeList } from './routes/route-list.ts';
import { MainProviders } from './providers/MainProviders.tsx';

function App() {
  return (
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
  );
}

export default App;
