import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import Config from './Config';
import Router from './router';
import { store } from './store';
import isTouchDevice from './utils/isTouchDevice';

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <Provider store={store}>
    <DndProvider
      backend={isTouchDevice() ? TouchBackend : HTML5Backend}
      options={{ enableMouseEvents: true }}
    >
      <QueryClientProvider client={queryClient}>
        <Router />
        {Config.nodeEnv === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : ''}
      </QueryClientProvider>
    </DndProvider>
  </Provider>
);

export default App;
