import { NextPage } from "next";
import React from "react";
import AppLayout from "../components/AppLayout";
import BoardList from "../components/BoardList";

const Board: NextPage = () => {
	return (
		<AppLayout>
			<BoardList />
		</AppLayout>
	);
};

export default Board;
