import { SnackbarProvider } from 'notistack';

import React from 'react';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { registeredModals } from '@components/modals/registeredModals';
import { Modals } from '@core/Modal';
import { createStore } from '@setup/configureStore';
import { useAppTheme } from '@themes/secondary';
import Routers from './routes';

export const store = createStore();

function App() {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <>
          <Modals registeredModals={registeredModals} />
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}>
            <Routers />
          </SnackbarProvider>
        </>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
