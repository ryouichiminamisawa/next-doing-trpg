import React, { useState, useCallback } from "react";
import Link from "next/link";
import SelectBox from "../../components/UIKIT/SelectBox";
import InputText from "../../components/UIKIT/InputText";
import { PrimaryButton } from "../../components/UIKIT/PrimaryButton";
// import { useRouter } from "next/router";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../Firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import SelectInput from "@material-ui/core/Select/SelectInput";

const CharaEdit = () => {
	// const router = useRouter();
	// const handleClick = () => {
	// 	// event.preventDefault();
	// 	router.push("/templates/Home");
	// };

	// const [character, setCharacter] = useState({
	// 	playerName: "",
	// 	TRPG: "",
	// 	characterName: "",
	// 	occupation: "",
	// 	skill: "",
	// 	gender: "",
	// 	url: "",
	// });

	const [playerName, setPlayerName] = useState(""),
		[TRPG, setTRPG] = useState(""),
		[characterName, setCharacterName] = useState(""),
		[occupation, setOccupation] = useState(""),
		[skill, setSkill] = useState(""),
		[gender, setGender] = useState(""),
		[url, setUrl] = useState("");

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

	// const inputOccupation = useCallback(
	// 	(event) => {
	// 		setOccupation(event.target.value);
	// 	},
	// 	[setOccupation]
	// );

	// const inputSkill = useCallback(
	// 	(event) => {
	// 		setSkill(event.target.value);
	// 	},
	// 	[setSkill]
	// );

	// const inputUrl = useCallback(
	// 	(event) => {
	// 		setUrl(event.target.value);
	// 	},
	// 	[setUrl]
	// );
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
	// useEffect(() => {
	// 	let id = window.location.pathname.split("/templates/CharaEdit")[1];
	// 	if (id !== "") {
	// 		id = id.split("/templates/Home")[1];
	// 	}

	// 	if (id !== "") {
	// 		db.collection("characters")
	// 			.doc(id)
	// 			.get()
	// 			.then((snapshot) => {
	// 				const data = snapshot.data();
	// 				setPlayerName(data.playerName);
	// 				setTRPG(data.TRPG);
	// 				setCharacterName(data.characterName);
	// 				setOccupation(data.occupation);
	// 				setSkill(data.skill);
	// 				setGender(data.gender);
	// 				setUrl(data.url);
	// 			});
	// 	}
	// }, []);

	// const characterSubmit =

	// const saveCharacter = (character) => {
	// 	// console.log("this");
	// 	const app = initializeApp(firebaseConfig);
	// 	const firestore = getFirestore(app);

	// 	console.log("save character");
	// 	addDoc(collection(firestore, "characters"), character);
	// };

	const saveCharacter = (
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

		addDoc(collection(firestore, "characters"), {
			playerName: playerName,
			TRPG: TRPG,
			characterName: characterName,
			occupation: occupation,
			skill: skill,
			gender: gender,
			url: url,
		});
	};

	return (
		<div>
			<h1>キャラクター編集画面です！</h1>
			<Link href="./Home">home画面に飛びます</Link>
			<div>
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
					// type="submit"
					onClick={() => {
						// const router = useRouter();
						// const handleClick = (e) => {
						// 	e.preventDefault();
						// 	router.push("/Home");
						// };
						saveCharacter(
							playerName,
							TRPG,
							characterName,
							occupation,
							skill,
							gender,
							url
						);
						// handleClick();
						// characterName,
						// TRPG,
						// characterName,
						// occupation,
						// skill,
						// gender,
						// url
						// console.log("clicked!");
					}}
				></PrimaryButton>
			</div>
		</div>
	);
};

export default CharaEdit;
