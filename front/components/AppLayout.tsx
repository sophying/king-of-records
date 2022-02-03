import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { Col, Row } from "antd";
import styled from "styled-components";

const WrapComponent = styled.div`
	margin: 0px auto;
	padding: 0px;
	width: 80%;
	height: 90%;
`;

const AppLayout = ({ children }) => {
	return (
		<>
			<Header />
			<WrapComponent>
				<Row gutter={8}>
					<Col xs={24} md={12}>
						{children}
					</Col>
				</Row>
			</WrapComponent>
		</>
	);
};

export default AppLayout;

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
