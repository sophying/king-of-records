import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import styled from "styled-components";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const { Content } = Layout;

const WrapComponent = styled.div`
	margin: 0px auto;
	padding: 0px;
	width: 80%;
	height: 650px;
`;

const ContentStyle = styled(Content)`
	padding-top: 30px;
	background-color: #ffffff;
	height: 100%;
`;

const AppLayout = ({ children }) => {
	return (
		<>
			<HeaderLayout />
			<WrapComponent>
				<ContentStyle>{children}</ContentStyle>
			</WrapComponent>
			<FooterLayout />
		</>
	);
};

export default AppLayout;

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
