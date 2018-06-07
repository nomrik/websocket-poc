import {all, call, take, takeEvery, put, apply, fork} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import actionTypes from './actionTypes';
import createWebSocket from './createWebSocket';

const createWebSocketChannel = (ws) => {
    return eventChannel(emit => {
        ws.onmessage = (message) => {
            emit(JSON.parse(message.data))
        }

        const unsubscribe = () => {
            ws.close()
        }

        return unsubscribe;
    })
}

function *webSocketSend(ws, action) {
    console.log(ws);
    yield apply(ws, ws.send, [JSON.stringify(action)])
}

function *watchWebSocketSend(ws) {
    yield takeEvery([
        actionTypes.NEW_USER,
        actionTypes.NEW_POST
    ], webSocketSend, ws)
}

function *webSocketSaga() {
    const ws = yield call(createWebSocket);
    const wsChannel = yield call(createWebSocketChannel, ws)
    yield fork(watchWebSocketSend, ws);

    while(true) {
        const actionFromServer = yield take(wsChannel);
        console.log(actionFromServer)
        yield put(actionFromServer);
    }
}

export default function *rootSaga() {
    yield all([
        webSocketSaga()
    ])
};