import React from "react";
import { Table } from "antd";
import BoardData from "../data/boardData";
import BoardRow from "./BoardComponents/BoardRow";
import BoardButton from "./BoardComponents/BoardButton";

const BoardList = () => {
	return (
		<>
			<table border="1" className="board-table-top">
				<thead>
					<tr>
						<td width={60}>글번호</td>
						<td width={200}>글쓴이</td>
						<td width={400}>글제목</td>
						<td width={100}>작성일자</td>
					</tr>
				</thead>
				<tbody>
					{BoardData.map((data) => (
						<BoardRow data={data} />
					))}
				</tbody>
			</table>
			<div className="btn-box">
				<BoardButton />
			</div>
		</>
	);
};

export default BoardList;
