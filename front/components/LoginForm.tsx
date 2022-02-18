import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const LoginForm = () => {
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="아이디"
					name="user_id"
					rules={[{ required: true, message: "아이디를 입력해주세요." }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="비밀번호"
					name="password"
					rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{ offset: 8, span: 16 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default LoginForm;
