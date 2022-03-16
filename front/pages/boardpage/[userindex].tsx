import { NextPage } from "next";
import { useRouter } from "next/router";

import React from "react";
import AppLayout from "../../components/AppLayout";

const Content: NextPage<{}> = () => {
	const router = useRouter();
	const { userIndex } = router.query;
	console.log("router.query.id");
	console.log({ userIndex });
	return (
		<AppLayout>
			<div>read {userIndex}</div>
		</AppLayout>
	);
};

// 페이지 값 전달???
// export async function getStaticProps(context) {
//    return {
//       props: {}, // will be passed to the page component as props
//    };
// }

export default Content;
