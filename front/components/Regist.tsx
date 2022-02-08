import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hook/useInput";
import { string } from "prop-types";

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
	return (
		<>
			<div>
				<FormStyle
					labelCol={{ span: 2 }}
					wrapperCol={{ span: 10 }}
					layout="horizontal"
				>
					<FormItemStyle label="아이디">
						<Input name="user_id" />
					</FormItemStyle>
					<FormItemStyle label="이메일">
						<Input name="email" type="email" required />
					</FormItemStyle>
					<FormItemStyle label="비밀번호">
						<Input name="password" type="password" />
					</FormItemStyle>
					<FormItemStyle label="이름">
						<Input name="name" />
					</FormItemStyle>
					<FormItemStyle label="닉네임">
						<Input name="nick_name" />
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
