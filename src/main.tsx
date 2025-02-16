import './styles/index.css';
import './configs/i18n.config.ts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StompSessionProvider } from 'react-stomp-hooks';
import { BrowserRouter } from 'react-router-dom';
import { ENV } from './constants/env.ts';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StompSessionProvider url={ENV.BASE_URL} reconnectDelay={2000}>
          <App />
        </StompSessionProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
