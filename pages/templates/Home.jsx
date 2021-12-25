import React from "react";
import Link from "next/link";
// import { PreSave } from "./PreSave";

const Home = () => {
	return (
		<div>
			<h1>ホーム画面です</h1>
			<Link href="./CharaEdit">キャラクター編集画面に飛びます</Link>
			{/* <Link href="./CharaEditPre">キャラクター編集（仮）</Link> */}
			{/* <Link></Link>
			<Link></Link>
			<Link></Link> */}
			{/* <PreSave></PreSave> */}
		</div>
	);
};

export default Home;
