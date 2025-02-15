import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { StompSessionProvider } from 'react-stomp-hooks';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StompSessionProvider url={'http://localhost:8080/api/ws'} reconnectDelay={2000}>
      <App />
    </StompSessionProvider>
  </StrictMode>,
);
