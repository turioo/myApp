import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './rootReducer'; // where reducers is a object of reducers
import { watchSagas } from './watchSagas';

// import { NativeModules } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';

// if (__DEV__) {
//   NativeModules.DevSettings.setIsDebuggingRemotely(true);
// }

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig: any = { enhancers };
const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(...enhancers),
);
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(watchSagas);

export default configureStore;
