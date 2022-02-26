// import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";
import "../components/style/_app.scss";
import "../components/style/login.scss";
import "../components/style/user.scss";
import wrapper from "../store/configStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList from "../components/BoardList";

const KingOfRecords = ({ Component }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>KingOfRecords</title>
			</Head>
			<body>
				<Component />
			</body>
		</>
	);
};

KingOfRecords.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(KingOfRecords);
