import React from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

const FormStyle = styled(Form)`
	marign: 0 auto;
    padding: 0px;
`;

const Regist = () => {
	return (
		<>
			<FormStyle
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 10 }}
				layout="horizontal"
			>
				<Form.Item label="아이디">
					<Input name="user_id" />
				</Form.Item>
				<Form.Item label="이메일">
					<Input name="email" type="email" required />
				</Form.Item>
				<Form.Item label="비밀번호">
					<Input name="password" type="password" />
				</Form.Item>
				<Form.Item label="이름">
					<Input name="name" />
				</Form.Item>
				<Form.Item label="닉네임">
					<Input name="nick_name" />
				</Form.Item>
			</FormStyle>
		</>
	);
};

export default Regist;
