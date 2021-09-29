import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import logger from "redux-logger"
import rootReducer from "./rootReducer"
import rootSaga from "./usersagas"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store;