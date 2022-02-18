import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "antd";
import AppLayout from "../components/AppLayout";

const Home: NextPage = () => {
	const router = useRouter();
	return (
		<>
			<AppLayout>
				<div className="login-box">
					<Button
						className="login-btn"
						size="large"
						onClick={() => router.push("/login")}
					>
						로그인하기
					</Button>
				</div>
			</AppLayout>
		</>
	);
};

export default Home;
