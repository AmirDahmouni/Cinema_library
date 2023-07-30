import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;