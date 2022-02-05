import React from "react";
import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import Regist from "../components/Regist";

const Signup: NextPage = () => {
	return (
		<AppLayout>
			<Regist />
		</AppLayout>
	);
};

export default Signup;
