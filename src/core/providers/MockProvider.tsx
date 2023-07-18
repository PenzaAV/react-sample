import { InitialEntry } from 'history';
import { SnackbarProvider } from 'notistack';

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { registeredModals } from '@components/modals/registeredModals';
import { Modals } from '@core/Modal';
import { createStore } from '@setup/configureStore';
import { RootState, Subset } from '@setup/typedefs';

type MockProviderProps = {
  preloadedState?: Subset<RootState>;
  routeEntries?: InitialEntry[];
  children: any;
};
const MockProvider: React.FC<MockProviderProps> = ({
  preloadedState = {},
  routeEntries = [''],
  children,
}: MockProviderProps) => {
  const store = createStore(preloadedState);

  return (
    <div>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}>
          <MemoryRouter initialEntries={routeEntries}>
            {children}
            <Modals registeredModals={registeredModals} />
          </MemoryRouter>
        </SnackbarProvider>
      </Provider>
    </div>
  );
};

export default MockProvider;
