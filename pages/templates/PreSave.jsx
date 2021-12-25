// Import Admin SDK
// const { getDatabase } = require("firebase-admin/database");

import firebase, { db } from "../../Firebase";
import { Button } from "@material-ui/core";
import { collection } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";

// Get a database reference to our blog

export const PreSave = () => {
	const data = {
		name: "ロサンゼルス",
		state: "CA",
		country: "USA",
	};
	console.log(db);
	return (
		<div>
			<Button
				onClick={function () {
					await db.collection("cities").doc("LA").set(data);
				}}
			>
				プレ登録ボタンですよ
			</Button>
		</div>
	);
};
