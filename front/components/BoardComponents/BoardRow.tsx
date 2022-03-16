import Link from "next/link";
import React from "react";

const BoardRow = ({ data }: any) => {
	return (
		<>
			<tr>
				<td>{data.id}</td>
				<td>{data.userName}</td>
				<td>
					<Link
						href="/boardPage/read/[userIndex]"
						as={`/boardPage/read/${data.userIndex}`}
					>
						<a className="title-link">{data.title}</a>
					</Link>
				</td>
				<td>{data.date.toLocaleDateString("ko-KR")}</td>
			</tr>
		</>
	);
};

export default BoardRow;
