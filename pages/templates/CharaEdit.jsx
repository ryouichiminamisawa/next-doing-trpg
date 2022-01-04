import React, { useState, useCallback } from "react";
import Link from "next/link";
import SelectBox from "../../components/UIKIT/SelectBox";
import InputText from "../../components/UIKIT/InputText";
import { PrimaryButton } from "../../components/UIKIT/PrimaryButton";
import {
	addDoc,
	collection,
	Firestore,
	getFirestore,
	getDocs,
	doc,
	query,
} from "firebase/firestore";
import { firebaseConfig } from "../../Firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { DropzoneArea } from "material-ui-dropzone";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Button } from "@material-ui/core";
import { async } from "@firebase/util";
// import {CharacterCard} from "./CharacterCard"

const CharaEdit = () => {
	const [playerName, setPlayerName] = useState(""),
		[TRPG, setTRPG] = useState(""),
		[characterName, setCharacterName] = useState(""),
		[occupation, setOccupation] = useState(""),
		[skill, setSkill] = useState(""),
		[gender, setGender] = useState(""),
		[url, setUrl] = useState(""),
		[files, setFiles] = useState([]);

	const inputCharacterName = (event) => {
		setCharacterName(event.target.value);
	};

	const inputOccupation = (event) => {
		setOccupation(event.target.value);
	};

	const inputSkill = (event) => {
		setSkill(event.target.value);
	};

	const inputUrl = (event) => {
		setUrl(event.target.value);
	};

	const playerNames = [
		{ id: "erickwolf", name: "Erick Wolf" },
		{ id: "kuro", name: "クロ" },
		{ id: "sabakan", name: "鯖缶" },
		{ id: "shigurekintoki", name: "時雨金時" },
		{ id: "nyantaro", name: "にゃんたろー" },
		{ id: "Leopold", name: "レオポルド" },
	];

	const TRPGs = [
		{ id: "callofchuluhu", name: "クトゥルフ" },
		{ id: "konosuba", name: "このすば！" },
		{ id: "arianrhod", name: "アリアンロッド2E" },
	];

	const genders = [
		{ id: "male", name: "男" },
		{ id: "female", name: "女" },
		{ id: "others", name: "その他" },
	];

	// const app = initializeApp(firebaseConfig);
	// const firestore = getFirestore(app);
	// const charactersRef = firestore.collection("characters");

	const saveCharacter = async (
		playerName,
		TRPG,
		characterName,
		occupation,
		skill,
		gender,
		url
	) => {
		const app = initializeApp(firebaseConfig);
		const firestore = getFirestore(app);

		const imageUrl = await uploadImage(files[0]);
		addDoc(collection(firestore, "characters"), {
			playerName: playerName,
			TRPG: TRPG,
			characterName: characterName,
			occupation: occupation,
			skill: skill,
			gender: gender,
			url: url,
			imageUrl: imageUrl,
		});
	};
	const fetchCharacter = async () => {
		const app = initializeApp(firebaseConfig);
		const firestore = getFirestore(app);

		const q = query(collection(firestore, "characters"));
		const querySnapShot = await getDocs(q);
		// console.log(querySnapShot);
		querySnapShot.forEach((doc) => {
			console.log(doc.id, "=>", doc.data());
		});
	};

	const uploadImage = (file) => {
		// console.log(file);
		const app = initializeApp(firebaseConfig);
		const storage = getStorage(app);
		const storageRef = ref(storage, `characterImage/${file.name}`);

		uploadBytes(storageRef, file).then((snapshot) => {
			// console.log(snapshot);
		});
		return getDownloadURL(storageRef);
	};

	return (
		<div>
			<h1>キャラクター編集画面です！</h1>
			<Link href="./Home">home画面に飛びます</Link>
			<div>
				<DropzoneArea
					onChange={(files) => {
						setFiles(files);
					}}
				/>
				<SelectBox
					label="プレイヤー名"
					options={playerNames}
					required={true}
					select={setPlayerName}
					onChange={playerName.select}
					value={playerName}
				></SelectBox>
				<SelectBox
					label="TRPG"
					options={TRPGs}
					required={true}
					select={setTRPG}
					onChange={TRPG.select}
					value={TRPG}
				></SelectBox>
				<InputText
					// name="characterName"
					label="キャラクター名"
					fullWidth={true}
					multiline={true}
					required={true}
					onChange={inputCharacterName}
					rows={1}
					value={characterName}
					type={"text"}
				></InputText>
				<InputText
					// name="occupation"
					label="職業"
					fullWidth={true}
					multiline={true}
					required={true}
					onChange={inputOccupation}
					rows={1}
					value={occupation}
					type={"text"}
				></InputText>
				<InputText
					// name="skill"
					label="スキル"
					fullWidth={true}
					multiline={true}
					required={true}
					onChange={inputSkill}
					rows={5}
					value={skill}
					type={"text"}
				></InputText>
				<SelectBox
					label="性別"
					options={genders}
					required={true}
					select={setGender}
					onChange={gender.select}
					value={gender}
				></SelectBox>
				<InputText
					// name="url"
					label="url"
					fullWidth={true}
					multiline={true}
					required={true}
					onChange={inputUrl}
					rows={1}
					value={url}
					type={"text"}
				></InputText>
				<PrimaryButton
					label="キャラクター情報を保存"
					color="primary"
					size="large"
					variant="outlined"
					type="submit"
					onClick={() => {
						saveCharacter(
							playerName,
							TRPG,
							characterName,
							occupation,
							skill,
							gender,
							url
						);
					}}
				></PrimaryButton>
				<Button
					onClick={() => {
						fetchCharacter(
							playerName,
							TRPG,
							characterName,
							occupation,
							skill,
							gender,
							url
						);
					}}
				>
					fetchの確認ボタン
				</Button>
			</div>
		</div>
	);
};

export default CharaEdit;
