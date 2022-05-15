import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import reducer from './reducer';

const makeStore = (context) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
