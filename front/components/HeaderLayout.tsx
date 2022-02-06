import React from "react";
import { Menu, Avatar, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const { Header } = Layout;

const HeaderStyle = styled(Header)`
	margin: 0px auto;
	padding: 0px;
	width: 80%;
`;

const AvatarStyle = styled.div`
	display: inline-block;
	position: absolute;
	top: 0;
	right: 150px;
`;

const HeaderLayout = () => {
	return (
		<HeaderStyle>
			<Menu mode="horizontal" style={{ backgroundColor: "#c5cae9" }}>
				<Menu.Item>
					<Link href="/">Home</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/board">게시판</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">회원가입</Link>
				</Menu.Item>
				<AvatarStyle>
					<Menu.Item>
						<Avatar
							style={{ backgroundColor: "transparent", color: "black" }}
							icon={<UserOutlined />}
						/>
					</Menu.Item>
				</AvatarStyle>
			</Menu>
		</HeaderStyle>
	);
};

export default HeaderLayout;
