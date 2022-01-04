import React, { useState } from "react";
import Link from "next/link";
import { CharacterCard, DemoCard } from "./CharacterCard";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase/firebaseConfig";
import {
	getDoc,
	getFirestore,
	QuerySnapshot,
	snapshotEqual,
} from "firebase/firestore";
import { query, collection, getDocs, doc } from "firebase/firestore";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from "@material-ui/core";
import { PrimaryButton } from "../../components/UIKIT/PrimaryButton";
// import Index from "./CharactersList";

const Home = () => {
	const [characters, setCharacters] = useState();
	const getCharacters = async () => {
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		// console.log(collection())
		const q = query(collection(db, "characters"));
		const querySnapShot = await getDocs(q);

		let data = [];
		querySnapShot.forEach((doc) => {
			data.push(Object.assign({ id: doc.id }, doc.data()));
		});
		console.log(data);
		return data;
	};
	// const charaInfo = getCharacters();
	// getCharacters().then((charaInfo) => {
	// 	setCharacters(charaInfo);
	// });
	React.useEffect(() => {
		getCharacters().then((charaInfo) => {
			setCharacters(charaInfo);
		});
	}, []);
	// setCharacters();
	return (
		<div>
			<h1>ホーム画面です</h1>
			<Link href="./CharaEdit">キャラクター編集画面に飛びます</Link>
			<Link href="./CharactersList">キャラクター一覧場面に飛びます</Link>
			{characters.map((character) => {
				return <DemoCard character={character} />;
			})}
		</div>
	);
};

export default Home;
