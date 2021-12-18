import React from "react";
import Link from "next/link";
// import InputText from "../../components/UIKIT/InputText";

const Firstpost = () => {
	return (
		<div>
			<h1>First Post</h1>
			<h2>
				<Link href="/">back!</Link>
			</h2>
			<div>{/* <InputText></InputText> */}</div>
		</div>
	);
};

export default Firstpost;
