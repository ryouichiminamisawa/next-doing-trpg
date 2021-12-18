import React from "react";
import Link from "next/link";

const Home = () => {
	return (
		<div>
			<h1>ホーム画面です</h1>
			<Link href="./CharaEdit">キャラクター編集画面に飛びます</Link>
			{/* <Link></Link>
			<Link></Link>
			<Link></Link> */}
		</div>
	);
};

export default Home;
