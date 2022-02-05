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

const AvatarStyle = styled.span`
	float: right;
`;

const HeaderLayout = () => {
	return (
		<HeaderStyle>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/">Home</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/board">게시판</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">회원가입</Link>
				</Menu.Item>
				<Menu.Item>
					<AvatarStyle>
						<Avatar icon={<UserOutlined />} />
					</AvatarStyle>
				</Menu.Item>
			</Menu>
		</HeaderStyle>
	);
};

export default HeaderLayout;
