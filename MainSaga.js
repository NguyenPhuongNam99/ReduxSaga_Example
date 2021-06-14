import { all } from 'redux-saga/effects';
import rootSaga from './src/Saga';

export default function* HelloSaga(){
    yield all([rootSaga()])
}