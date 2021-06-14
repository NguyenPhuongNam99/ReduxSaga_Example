import { call, put, takeEvery,all, takeLeading } from 'redux-saga/effects';
import {
    GET_POST,
    getPostsSuccess,
    getPostsFailed,
    ADD_POST,
    addPostsSuccess,
    addPostFailed
} from './Action'
import {getPost,addPost} from './api'

function* getPosstSaga(){
    try{
        const data = yield call(getPost);
        yield put(getPostsSuccess(data));
    }
    catch(error){
        yield put(getPostsFailed(error.message));
    }
}
function* getPostWattcher(){
    yield takeEvery(GET_POST,getPosstSaga)
}

function* ADDPostSaga (action){
    try{
        const data = yield call(addPost,action.payload);
        yield put(addPostsSuccess({...action.payload,data}))
    }
    catch(error){
        yield put(addPostFailed(error.message))
    }
}

function* addPostwatcher (){
    yield takeLeading(ADD_POST,ADDPostSaga)
}

export default function* rootSaga(){
    yield all([getPostWattcher(),addPostwatcher()])
}