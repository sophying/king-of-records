import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import BoardList from "../components/BoardList";

const Home: NextPage = () => {
	const { logInDone } = useSelector((state: any) => state.user);
	return (
		<>
			<AppLayout>
				{logInDone ? ( //
					<BoardList />
				) : (
					<LoginForm />
				)}
			</AppLayout>
		</>
	);
};

export default Home;
