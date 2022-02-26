import axios from "axios";
import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import {
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	LOG_OUT_FAILURE,
	LOG_OUT_REQUEST,
	LOG_OUT_SUCCESS,
	LOG_IN_FAILURE,
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS,
} from "../../reducers/user";

function signUpAPI() {
	// 서버로 요청
	return axios.post("/api/signup", data);
}

function* signUp(action: any) {
	console.log("UserSaga-Signup");
	try {
		yield delay(1000);
		yield put({
			type: SIGN_UP_SUCCESS,
			data: action.data,
		});
	} catch (error: any) {
		yield put({
			type: SIGN_UP_FAILURE,
			error: error.response.data,
		});
	}
}
function logInAPI() {
	// 서버로 요청
	return axios.post("/api/logIn");
}

function* logIn(action: any) {
	console.log("UserSaga-logIn");
	try {
		yield delay(1000);
		yield put({
			type: LOG_IN_SUCCESS,
			data: action.data,
		});
	} catch (error: any) {
		yield put({
			type: LOG_IN_FAILURE,
			error: error.response.data,
		});
	}
}

function* watchSignUp() {
	yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogin() {
	yield takeLatest(LOG_IN_REQUEST, logIn);
}

export default function* userSaga() {
	yield all([fork(watchSignUp), fork(watchLogin)]);
}
