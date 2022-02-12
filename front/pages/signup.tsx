import React, { useCallback, useState } from "react";
import type { NextPage } from "next";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import AppLayout from "../components/AppLayout";

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
	const onSubmit = useCallback(
		(e) => {
			console.log(userId);
			console.log(userEmail);
			console.log(userPassword);
			console.log(userName);
			console.log(userNickname);
		},
		[userId, userEmail, userPassword, userName, userNickname],
	);
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
