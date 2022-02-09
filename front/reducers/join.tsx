import React from "react";

export const initialState = {
	me: null,
	joinLoading: false,
	joinDone: false,
	joinError: null,
};

export const JOIN_REQUEST = "JOIN_REQUEST";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_FAILURE = "JOIN_FAILURE";

//ACTION
export const joinRequestAction = (data: any) => {
	return {
		type: JOIN_REQUEST,
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
		case JOIN_REQUEST:
			console.log("I am reducer-Join");
			return {
				...state,
				joinLoading: true,
				joinError: null,
				joinDone: false,
			};
		default:
			return state;
	}
};

export default reducer;
