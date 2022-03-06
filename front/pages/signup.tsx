import React, { useCallback, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Form, Input, Button, Modal } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import { signUpRequestAction } from "../reducers/user";

const FormStyle = styled(Form)`
	margin: 0 auto;
	margin-top: 60px;
	padding: 0px;
`;

const FormItemStyle = styled(Form.Item)`
	display: flex;
	justify-content: left;
	padding-left: 160px;
	text-align: center;
`;

const ButtonStyle = styled.div`
	margin-top: 70px;
	margin-right: 60px;
	display: flex;
	justify-content: flex-end;
`;

const ErrorStyle = styled.div`
	color: red;
	display: inline-block;
`;

const Signup: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { signUpLoading, signUpDone } = useSelector(
		(state: any) => state?.user,
	);
	// switch (signUpDone) {
	// 	case true:
	// 		router.push("/");
	// 		return !signUpDone;
	// }
	const [userId, setUserId] = useState<any>("");
	const onChangeUserId = useCallback((e) => {
		setUserId(e.target.value);
	}, []);
	const [userEmail, setUserEmail] = useState<string>("");
	const onChangeUserEmail = useCallback((e) => {
		setUserEmail(e.target.value);
	}, []);
	const [userPassword, setUserPassword] = useState<any>("");
	const onChangePassword = useCallback((e) => {
		setUserPassword(e.target.value);
	}, []);
	const [userName, setUserName] = useState<string>("");
	const onChangeUserName = useCallback((e) => {
		setUserName(e.target.value);
	}, []);
	const [userNickname, setUserNickname] = useState<string>("");
	const onChangeUserNickname = useCallback((e) => {
		setUserNickname(e.target.value);
	}, []);

	const [passwordError, setPasswordError] = useState(false);
	const [passwordCheck, setPasswordCheck] = useState("");
	const onChangePasswordCheck = useCallback(
		(e) => {
			setPasswordCheck(e.target.value);
			setPasswordError(e.target.value !== userPassword);
		},
		[userPassword],
	);

	const onSubmit = useCallback(() => {
		console.log(userId, userEmail, userPassword, userName, userNickname);
		dispatch(
			signUpRequestAction({
				userId,
				userEmail,
				userPassword,
				userName,
				userNickname,
			}),
		);
	}, [userId, userEmail, userPassword, userName, userNickname]);

	return (
		<>
			<AppLayout>
				<FormStyle
					onFinish={onSubmit}
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 8 }}
					layout="horizontal"
				>
					<FormItemStyle label="아이디">
						<Input
							name="user_id"
							value={userId}
							onChange={onChangeUserId}
							placeholder="아이디를 입력하세요."
						/>
					</FormItemStyle>
					<FormItemStyle label="이메일">
						<Input
							name="email"
							type="email"
							required
							value={userEmail}
							onChange={onChangeUserEmail}
							placeholder="test@test.com"
						/>
					</FormItemStyle>
					<FormItemStyle label="비밀번호">
						<Input
							name="password"
							type="password"
							value={userPassword}
							onChange={onChangePassword}
							placeholder="비밀번호를 입력하세요."
						/>
					</FormItemStyle>
					<FormItemStyle label="비밀번호체크">
						<Input
							name="user-password-check"
							type="password"
							required
							value={passwordCheck}
							onChange={onChangePasswordCheck}
							placeholder="비밀번호를 다시한번 입력하세요."
						/>
						{passwordError && <ErrorStyle>패스워드가 다릅니다.</ErrorStyle>}
					</FormItemStyle>
					<FormItemStyle label="이름">
						<Input name="name" value={userName} onChange={onChangeUserName} />
					</FormItemStyle>
					<FormItemStyle label="닉네임">
						<Input
							name="nick_name"
							value={userNickname}
							onChange={onChangeUserNickname}
						/>
					</FormItemStyle>
					<ButtonStyle>
						<Button
							style={{
								marginRight: "10px",
								backgroundColor: "#62727b",
								color: "#fff",
							}}
						>
							<Link href={"/"}>취소하기</Link>
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							style={{ backgroundColor: "#006064" }}
							loading={signUpLoading}
						>
							가입하기
						</Button>
					</ButtonStyle>
				</FormStyle>
			</AppLayout>
		</>
	);
};

export default Signup;
