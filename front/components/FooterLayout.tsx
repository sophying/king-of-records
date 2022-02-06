import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const FooterStyle = styled(Footer)`
	margin: 0px auto;
	padding: 10px;
	width: 80%;
	background-color: #c5cae9;
	text-align: center;
`;

const FooterLayout = () => {
	return (
		<>
			<FooterStyle>
				<div>F와 T사이</div>
				<div>https://github.com/lima1016/noteking</div>
				<div>https://github.com/sophying/king-of-records</div>
			</FooterStyle>
		</>
	);
};

export default FooterLayout;
