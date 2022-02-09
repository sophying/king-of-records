import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { string } from "prop-types";
import join from "../reducers/join";
import useInput from "../hooks/useInput";

const FormStyle = styled(Form)`
	margin: 0 auto;
	margin-top: 30px;
	padding: 0px;
`;

const FormItemStyle = styled(Form.Item)`
	display: flex;
	justify-content: center;
	text-align: center;
`;

const ButtonStyle = styled.div`
	margin-top: 70px;
	margin-right: 60px;
	display: flex;
	justify-content: flex-end;
`;

const Regist = () => {
	const [userId, onChangeUserId] = useInput(null);
	const [userEmail, onChangeUserEmail] = useInput(null);
	const [userPassword, onChangePassword] = useInput(null);
	const [userName, onChangeUserName] = useInput(null);
	const [userNickname, onChangeUserNickname] = useInput(null);

	const onSubmit = useCallback(() => {
		console.log(userId);
		console.log(userEmail);
		console.log(userPassword);
		console.log(userName);
	}, [userId, userEmail, userPassword]);
	return (
		<>
			<div>
				<FormStyle
					onFinish={onSubmit}
					labelCol={{ span: 2 }}
					wrapperCol={{ span: 10 }}
					layout="horizontal"
				>
					<FormItemStyle label="아이디">
						<Input name="user_id" onChange={onChangeUserId} value={userId} />
					</FormItemStyle>
					<FormItemStyle label="이메일">
						<Input
							name="email"
							type="email"
							required
							onChange={onChangeUserEmail}
							value={userEmail}
						/>
					</FormItemStyle>
					<FormItemStyle label="비밀번호">
						<Input
							name="password"
							type="password"
							onChange={onChangePassword}
							value={userPassword}
						/>
					</FormItemStyle>
					<FormItemStyle label="이름">
						<Input name="name" onChange={onChangeUserName} value={userName} />
					</FormItemStyle>
					<FormItemStyle label="닉네임">
						<Input
							name="nick_name"
							onChange={onChangeUserNickname}
							value={userNickname}
						/>
					</FormItemStyle>
					<ButtonStyle>
						<Button style={{ marginRight: "10px" }}>
							<Link href={"/"}>취소하기</Link>
						</Button>
						<Button type="primary" htmlType="submit">
							가입하기
						</Button>
					</ButtonStyle>
				</FormStyle>
			</div>
		</>
	);
};

export default Regist;
