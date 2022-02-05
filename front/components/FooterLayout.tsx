import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const FooterStyle = styled(Footer)`
	margin: 0px auto;
	padding: 0px;
	width: 80%;
`;

const FooterLayout = () => {
	return (
		<>
			<FooterStyle>
				<div>Footer</div>
				<div>Footer</div>
				<div>Footer</div>
				<div>Footer</div>
			</FooterStyle>
		</>
	);
};

export default FooterLayout;
