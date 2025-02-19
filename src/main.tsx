import './configs/i18n.config.ts';
import './styles/index.css';
import './styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StompSessionProvider } from 'react-stomp-hooks';
import App from './App.tsx';
import { ENV } from './constants/env.ts';
import AuthProvider from './providers/AuthProviders.tsx';
import store from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <StompSessionProvider url={ENV.BASE_URL + '/ws'} reconnectDelay={2000}>
            <App />
          </StompSessionProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
