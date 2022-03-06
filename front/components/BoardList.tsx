import React from "react";
import { Table } from "antd";

const BoardList = () => {
	const columns = [
		{
			title: "글쓴이",
			dataIndex: "userId",
			width: 150,
		},
		{
			title: "작성일자",
			dataIndex: "editDate",
			width: 100,
		},
		{
			title: "제목",
			dataIndex: "title",
			width: 300,
		},
	];

	const data: Array = [];
	for (let i = 0; i < 100; i++) {
		data.push({
			key: i,
			userId: `Edward King ${i}`,
			editDate: 32,
			title: `London, Park Lane no. ${i}`,
		});
	}
	return (
		<>
			<Table
				columns={columns}
				dataSource={data}
				pagination={{ pageSize: 10 }}
				scroll={{ y: 400 }}
			/>
		</>
	);
};

export default BoardList;
