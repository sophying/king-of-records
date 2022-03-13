import React, { useCallback, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Form, Input, Button, Result } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import UserData from "../data/userData";
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
	const history = useRouter();
	const dispatch = useDispatch();
	const [signUpDone, setSignUpDone] = useState<boolean>(false);
	const { signUpLoading } = useSelector((state: any) => state?.user);
	const [userId, onChangeUserId] = useInput("");
	const [userEmail, onChangeUserEmail] = useInput("");
	const [userPassword, onChangePassword] = useInput("");
	const [userName, onChangeUserName] = useInput("");
	const [userNickname, onChangeUserNickname] = useInput("");

	const [passwordError, setPasswordError] = useState(false);
	const [passwordCheck, setPasswordCheck] = useState("");
	const onChangePasswordCheck = useCallback(
		(e) => {
			setPasswordCheck(e.target.value);
			setPasswordError(e.target.value !== userPassword);
		},
		[userPassword],
	);

	const onSubmit = (values: any) => {
		const value = values.user_email;
		const userCheck = UserData.filter((user) => {
			// user.userEmail === values.user_email;
			return user.userEmail == value;
		});

		if (userCheck.length > 0) {
			alert("이미 사용자가 존재합니다.");
		} else {
			dispatch(signUpRequestAction(values));
			setSignUpDone(true);
		}
	};

	const onSignSuccess = () => {
		history.push("/");
	};

	return (
		<>
			{signUpDone ? (
				<Result
					status="success"
					title="회원가입이 성공하였습니다!"
					extra={[
						<Button type="primary" key="console" onClick={onSignSuccess}>
							로그인하기
						</Button>,
					]}
				/>
			) : (
				<AppLayout>
					<FormStyle
						onFinish={onSubmit}
						labelCol={{ span: 6 }}
						wrapperCol={{ span: 8 }}
						layout="horizontal"
					>
						<FormItemStyle label="아이디" name="user_id">
							<Input
								value={userId}
								onChange={onChangeUserId}
								placeholder="아이디를 입력하세요."
							/>
						</FormItemStyle>
						<FormItemStyle label="이메일" name="user_email">
							<Input
								type="email"
								required
								value={userEmail}
								onChange={onChangeUserEmail}
								placeholder="test@test.com"
							/>
						</FormItemStyle>
						<FormItemStyle label="비밀번호" name="user_password">
							<Input
								type="password"
								value={userPassword}
								onChange={onChangePassword}
								placeholder="비밀번호를 입력하세요."
							/>
						</FormItemStyle>
						<FormItemStyle label="비밀번호체크" name="user-password-check">
							<Input
								type="password"
								required
								value={passwordCheck}
								onChange={onChangePasswordCheck}
								placeholder="비밀번호를 다시한번 입력하세요."
							/>
							{passwordError && <ErrorStyle>패스워드가 다릅니다.</ErrorStyle>}
						</FormItemStyle>
						<FormItemStyle label="이름" name="user_name">
							<Input value={userName} onChange={onChangeUserName} />
						</FormItemStyle>
						<FormItemStyle label="닉네임" name="nick_name">
							<Input value={userNickname} onChange={onChangeUserNickname} />
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
			)}
		</>
	);
};

export default Signup;
