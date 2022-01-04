import { initializeApp } from "firebase/app";
import {
	getDocs,
	getFirestore,
	query,
	collection,
	QuerySnapshot,
} from "firebase/firestore";
// import Link from "next/link";
import React from "react";
// import { render } from "react-dom";
import { firebaseConfig } from "../../Firebase/firebaseConfig";

export default class Index extends React.Component {
	static async getInitialProps() {
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		// console.log(collection())
		const q = query(collection(db, "characters"));
		const querySnapShot = await getDocs(q);

		let data = [];
		querySnapShot.forEach((doc) => {
			data.push(Object.assign({ id: doc.id }, doc.data()));
			return data;
		});
	}

	render() {
		const firestoreDatas = this.props.datas;
		return (
			<div>
				<h3>Firestoreのデータ一覧</h3>
				<div>
					<ul>
						{firestoreDatas.map((characters) => (
							<li>
								<a>{characters.TRPG}</a>
							</li>
						))}
					</ul>
				</div>
				<div></div>
			</div>
		);
	}
}
