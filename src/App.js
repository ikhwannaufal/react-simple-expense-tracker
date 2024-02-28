import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux';
import './App.css';
import Main from './containers/Main';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
