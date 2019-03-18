import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose } from "redux";
import indexReducers from "../reducers/index_reducer";
import rootSaga from "../saga/index_saga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
const persistConfig = {
  transforms: [immutableTransform()],
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, indexReducers);
const sagaMiddleware = createSagaMiddleware();
//设置多个中间件
const middleWares = [sagaMiddleware];
const enhances = [applyMiddleware(...middleWares)];
const store = createStore(persistedReducer, compose(...enhances));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
module.exports = {
  store,
  persistor
};
