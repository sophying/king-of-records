import { string } from "prop-types";

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

interface loginData {
	userId: any;
	password: any;
}

interface signUpData {
	userId: any;
	userEmail: string;
	userPassword: any;
	userName: string;
	userNickname: string;
}

//ACTION
export const signUpRequestAction = (data: signUpData) => {
	return {
		type: SIGN_UP_REQUEST,
		data,
	};
};

export const logInRequestAction = (data: loginData) => {
	return {
		type: LOG_IN_REQUEST,
		data,
	};
};
export const logoutRequestAction = () => {
	return {
		type: LOG_OUT_REQUEST,
	};
};

// Dummy
// const dummyUser = (data: any) => ({
// 	userId: data.user_id,
// 	password: data.password,
// });

// sign Dummy
const dummyUser = (data: signUpData) => ({
	userId: data.userId,
	userEmail: data.userEmail,
	userPassword: data.userPassword,
	userName: data.userName,
	userNickname: data.userNickname,
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
		case SIGN_UP_SUCCESS:
			console.log("I am reducer-signUp-Success");
			return {
				...state,
				signUpLoading: false,
				signUpDone: true,
			};
		case SIGN_UP_FAILURE:
			console.log("i am reducer-signUp-failure");
			return {
				...state,
				signUpLoading: false,
				signUpError: action.error,
			};
		case LOG_IN_REQUEST:
			console.log(" i am reducer-login-request");
			return {
				...state,
				logInLoading: true,
				logInError: null,
				logInDone: false,
			};
		case LOG_IN_SUCCESS:
			console.log(" i am reducer-login-success");
			console.log(action.data);
			return {
				...state,
				logInLoading: false,
				logInDone: true,
				me: dummyUser(action.data),
			};
		case LOG_IN_FAILURE:
			console.log(" i am reducer-login-failure");
			return {
				...state,
				logInLoading: false,
				logInError: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
