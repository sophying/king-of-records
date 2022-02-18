import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";

const initialState = {
	user: {},
};

// 1-1 action
const changeNicknameAction = {
	type: "CHANGE_NICKNAME",
	data: "hello",
};
// 1-2. 동적 action을  만들어주면 효율적이다. (중복 제거)
// action creator
const changeNickname = (data) => {
	return {
		type: "CHANGE_NICKNAME",
		data,
	};
};
// 1-3. 비동기 action creator
// 액션 하나를 만들어주면 dispatch 하여 리듀서에 따라 다음 상태가 나오고
// 알아서 연결된 컴포넌트에게 변경된 것이 감지되면 값을 변경시킴

// (이전상태, 액션) => 다음상태 를 만들어내는 함수
const rootReducer = combineReducers({
	// HYDRATE (서버사이드 렌더링)을 위해서 index를 하나 넣어줌.
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log("HYDRATE", action);
				return { ...state, ...action.payload };
			default:
				return state;
		}
	},
	user,
});

export default rootReducer;
