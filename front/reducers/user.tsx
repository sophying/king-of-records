import React from "react";

export const initialState = {
	me: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	loginLoading: false,
	loginDone: false,
	loginError: null,
	logOutLoading: false,
	logOutDone: false,
	logOutError: null,
};

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

//ACTION
export const signUpRequestAction = (data: any) => {
	return {
		type: SIGN_UP_REQUEST,
		data,
	};
};

// Dummy
const dummyUser = (data: any) => ({
	...data,
	userId: "hello",
	userEmail: "hello@naver.com",
	userPassword: "1111",
	userName: "lovely",
	userNickname: "cucu",
});

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SIGN_UP_REQUEST:
			console.log("I am reducer-signUp");
			return {
				...state,
				signUpLoading: true,
				signUpError: null,
				signUpDone: false,
			};
		default:
			return state;
	}
};

export default reducer;
