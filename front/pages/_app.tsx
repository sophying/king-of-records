// import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";

const KingOfRecords = ({ Component }) => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<title>KingOfRecords</title>
			</Head>
			<Component />
		</div>
	);
};

KingOfRecords.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default KingOfRecords;
