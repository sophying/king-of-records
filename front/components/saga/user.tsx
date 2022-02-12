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
	return axios.post("/api/signup");
}

function* signUp() {
	console.log("UserSaga-Signup");
	try {
		yield delay(1000);
		yield put({
			type: SIGN_UP_SUCCESS,
		});
	} catch (error) {
		yield put({
			type: SIGN_UP_FAILURE,
			error: error.response.data,
		});
	}
}

function* watchSignUp() {
	yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
	yield all([fork(watchSignUp)]);
}
