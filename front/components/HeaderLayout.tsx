import React, { useCallback } from "react";
import { Menu, Avatar, Layout, Popover, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const { Header } = Layout;

const HeaderStyle = styled(Header)`
	margin: 0px auto;
	text-align: center;
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
	const onClickMyInfo = useCallback(() => {
		console.log("내정보");
	}, []);
	const onClickLogout = useCallback(() => {
		console.log("로그아웃");
	}, []);
	return (
		<>
			<div className="header">
				<HeaderStyle>
					<Menu mode="horizontal" className="menu-bar">
						<Menu.Item className="menu-item">
							<Link href="/">
								<a className="menu-item-link">Home</a>
							</Link>
						</Menu.Item>
						<Menu.Item className="menu-item">
							<Link href="/board">
								<a className="menu-item-link">게시판</a>
							</Link>
						</Menu.Item>
						<Menu.Item className="menu-item">
							<Link href="/signup">
								<a className="menu-item-link">회원가입</a>
							</Link>
						</Menu.Item>
						<AvatarStyle>
							<Menu.Item className="menu-item">
								<Popover
									trigger="click"
									placement="bottom"
									content={
										<>
											<div onClick={onClickMyInfo}>내정보</div>
											<div onClick={onClickLogout}>로그아웃</div>
										</>
									}
								>
									<Avatar
										className="menu-item-avatar menu-item-link"
										style={{ backgroundColor: "transparent", color: "black" }}
										icon={<UserOutlined />}
									/>
								</Popover>
							</Menu.Item>
						</AvatarStyle>
					</Menu>
				</HeaderStyle>
			</div>
		</>
	);
};

export default HeaderLayout;
