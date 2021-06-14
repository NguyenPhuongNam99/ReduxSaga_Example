import {createStore,applyMiddleware} from 'redux'
import Reducer from '../src/Reducer';
import createSagaMiddleware from '@redux-saga/core';
import HelloSaga from '../MainSaga';
const sageMiddle = createSagaMiddleware();
const store = createStore(Reducer,applyMiddleware(sageMiddle))
sageMiddle.run(HelloSaga);

export default store;