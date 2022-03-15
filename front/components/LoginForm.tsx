import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logInRequestAction } from "../reducers/user";
import BoardList from "./BoardList";
import UserData from "../data/userData";

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useRouter();
	const [userId, setUserId] = useState<string>("");
	const onChangeUserId = useCallback(
		(e) => {
			console.log(e.target.value);
			setUserId(e.target.value);
		},
		[userId],
	);
	const [password, setPassword] = useState<string>("");
	const onChangePassword = useCallback(
		(e) => {
			console.log(e.target.value);
			setPassword(password);
		},
		[password],
	);

	const onFinish = (values: any) => {
		const userCheck = UserData.filter((user) => {
			return (
				user.userEmail == values.user_id && //
				user.userPassword == values.password
			);
		});

		if (userCheck.length > 0) {
			dispatch(logInRequestAction(values));
		} else {
			alert("이메일 또는 비밀번호를 다시 입력해주세요.");
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	// 회원가입 버튼
	const goSignup = () => {
		history.push("/signup");
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
						rules={[{ required: true, message: "이메일을 입력해주세요." }]}
					>
						<Input
							onChange={onChangeUserId}
							value={userId}
							placeholder="이메일을 입력해주세요."
						/>
					</Form.Item>

					<Form.Item
						className="login-input"
						label="비밀번호"
						name="password"
						rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
					>
						<Input.Password onChange={onChangePassword} value={password} />
					</Form.Item>
					<div className="button-box">
						<div className="button-login">
							<Form.Item wrapperCol={{ offset: 8, span: 8 }}>
								<Button type="primary" htmlType="submit" className="login-btn">
									로그인
								</Button>
							</Form.Item>
						</div>
						<div className="button-signup">
							<Form.Item wrapperCol={{ offset: 8, span: 8 }}>
								<Button
									type="primary"
									onClick={goSignup}
									className="login-btn signup-btn"
								>
									회원가입
								</Button>
							</Form.Item>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default LoginForm;
