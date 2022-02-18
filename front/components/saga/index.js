import { all, fork } from "redux-saga/effects";

import userSaga from "./user";

export default function* rootSaga() {
	yield all([fork(userSaga)]);
}

// function*  : generator
// 함수이다.
// fork 는 함수를 실행한다는 의미, all 은 generator 함수를 동시에 실행한다는 의미.
// fork 와 call 차이 : fork 비동기 / call 은 동기
// fork 는 기다리지 않고 결과와 상관없이 실행을 시켜서 진행
// call 은 결과가 나올 때까지 기다렸다가 결과를 받아 then으로 실행하는 것과 같음.
// call 은 await 역할을 함.
// saga 에는 다양한 이팩트 들이 존재 함 . (all, call, fork, take, delay, debounce, throttle ..)
// 다양하게 활용하기 위해 원리와 흐름을 알아야 함

// 굳이 yield call 을 사용하는 이유는 테스트 할 때 효율적이다.
//
