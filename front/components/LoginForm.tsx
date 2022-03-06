import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logInRequestAction } from "../reducers/user";
import BoardList from "./BoardList";

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useRouter();
	const [userId, setUserId] = useState<any>("");
	const onChangeUserId = useCallback(
		(e) => {
			console.log(e.target.value);
			setUserId(e.target.value);
		},
		[userId],
	);
	const [password, setPassword] = useState<any>("");
	const onChangePassword = useCallback(
		(e) => {
			console.log(e.target.value);
			setPassword(password);
		},
		[password],
	);

	const onFinish = (values: any) => {
		dispatch(logInRequestAction(values));
		console.log(values.userId, values.password);
		console.log("Success:", values);
		// history.push("/board");
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<div className="main-box">
			<div className="login-item">
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
						className="login-input"
						label="아이디"
						name="user_id"
						rules={[{ required: true, message: "아이디를 입력해주세요." }]}
					>
						<Input onChange={onChangeUserId} value={userId} />
					</Form.Item>

					<Form.Item
						className="login-input"
						label="비밀번호"
						name="password"
						rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
					>
						<Input.Password onChange={onChangePassword} value={password} />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{ offset: 8, span: 16 }}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit" className="login-btn">
							로그인
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default LoginForm;
