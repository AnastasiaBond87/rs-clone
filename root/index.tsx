import React from 'react';
import { SWRConfig } from 'swr';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from '../src/reportWebVitals';
import store from '../src/store';
import App from '../src/App';
import '../src/index.scss';
import '../src/localization/i18n';

const container = document.getElementById('root') as HTMLDivElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SWRConfig
          value={{
            onError: (error: Error) => {
              console.error(error.message);
            },
          }}
        >
          <App />
        </SWRConfig>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Measure performance by passing a function to log results
// (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. https://bit.ly/CRA-vitals
reportWebVitals();
