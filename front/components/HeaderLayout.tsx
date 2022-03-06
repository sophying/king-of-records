import React, { useCallback } from "react";
import { Menu, Avatar, Layout, Popover, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

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
	right: 200px;
`;

const MenuStyleRight = styled(Menu)`
	height: 60px;
	display: inline-block;
	margin-right: 30px;
`;

const MenuStyleLeft = styled(Menu)`
	height: 60px;
	display: inline-block;
`;

const HeaderLayout = () => {
	const dispatch = useDispatch();
	const { me } = useSelector((state: any) => state?.user);
	const router = useRouter();
	const onClickMyInfo = useCallback(() => {
		router.push("/mypage");
	}, []);
	const onClickLogout = useCallback(() => {
		dispatch(logoutRequestAction());
	}, []);
	return (
		<>
			{/* <div className="header">
				<HeaderStyle>
					<Menu mode="horizontal" className="menu-bar">
						<Menu.Item className="menu-item">
							<a className="menu-item-link" onClick={() => router.push("/")}>
								Home
							</a>
						</Menu.Item>
						<Menu.Item className="menu-item">
							<a
								className="menu-item-link"
								onClick={() => router.push("/board")}
							>
								게시판
							</a>
						</Menu.Item>
						<Menu.Item className="menu-item">
							<a
								className="menu-item-link"
								onClick={() => router.push("/signup")}
							>
								회원가입
							</a>
						</Menu.Item>
						<AvatarStyle>
							<Menu.Item className="menu-item">
								<Popover
									trigger="click"
									placement="bottom"
									content={
										<>
											<div className="menu-item-pop" onClick={onClickMyInfo}>
												내정보
											</div>
											<div className="menu-item-pop" onClick={onClickLogout}>
												로그아웃
											</div>
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
						<div className="user-nick">
							{me && (
								<>
									<span className="user-info">
										<input
											type="text"
											value={me?.userId?.split("")[0]}
											disabled
										></input>
									</span>
								</>
							)}
						</div>
					</Menu>
				</HeaderStyle>
			</div>
		</> */}

			<div className="header-menu-wrapper">
				<div className="header-menu">
					<div className="header-menu-link-left">
						<MenuStyleLeft mode="horizontal">
							<Menu.Item title="Home">
								<a
									onClick={() => router.push("/")}
									className="header-menu-link"
								>
									Home
								</a>
							</Menu.Item>
							<Menu.Item title="Board">
								<a
									onClick={() => router.push("/board")}
									className="header-menu-link"
								>
									게시판
								</a>
							</Menu.Item>
							<Menu.Item title="signup">
								<a
									onClick={() => router.push("/signup")}
									className="header-menu-link"
								>
									회원가입
								</a>
							</Menu.Item>
						</MenuStyleLeft>
					</div>
					<div className="header-menu-link-right">
						<MenuStyleRight mode="horizontal">
							<Menu.Item title="info">
								<Popover
									trigger="click"
									placement="bottom"
									content={
										<>
											<div className="menu-item-pop" onClick={onClickMyInfo}>
												내정보
											</div>
											<div className="menu-item-pop" onClick={onClickLogout}>
												로그아웃
											</div>
										</>
									}
								>
									<Avatar
										size={60}
										className="header-menu-link avatar"
										style={{ backgroundColor: "transparent", color: "black" }}
										icon={<UserOutlined />}
									/>
								</Popover>
							</Menu.Item>
						</MenuStyleRight>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderLayout;
