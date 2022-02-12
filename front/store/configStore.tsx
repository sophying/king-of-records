import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../components/saga";

const loggerMiddleware =
	({ dispatch, getState }: any) =>
	(next: any) =>
	(action: any) => {
		{
			console.log(action);
			return next(action);
		}
	};

const configStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware, loggerMiddleware];
	const enhancer =
		process.env.NODE_ENV === "production"
			? compose(applyMiddleware(...middlewares))
			: composeWithDevTools(applyMiddleware(...middlewares));

	const store = createStore(reducer, enhancer);
	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};

const wrapper = createWrapper(configStore, {
	debug: process.env.NODE_ENV === "development",
});

export default wrapper;
