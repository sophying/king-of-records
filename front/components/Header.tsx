import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import styled from "styled-components";

const WrappMenu = styled(Menu)`
	margin: 0px auto;
	padding: 0px;
	width: 80%;
	height: 90%;
`;

const Header = () => {
	return (
		<>
			<WrappMenu mode="horizontal">
				<Menu.Item>
					<Link href="/">Home</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/board">게시판</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">회원가입</Link>
				</Menu.Item>
			</WrappMenu>
		</>
	);
};

export default Header;
