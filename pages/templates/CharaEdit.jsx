import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import SelectBox from "../../components/UIKIT/SelectBox";
import InputText from "../../components/UIKIT/InputText";
import { PrimaryButton } from "../../components/UIKIT/PrimaryButton";
import { db } from "../../Firebase";

const CharaEdit = () => {
	const [playerName, setPlayerName] = useState(""),
		[TRPG, setTRPG] = useState(""),
		[characterName, setCharacterName] = useState(""),
		[occupation, setOccupation] = useState(""),
		[skill, setSkill] = useState(""),
		[gender, setGender] = useState(""),
		[url, setUrl] = useState("");

	const inputCharacterName = useCallback(
		(event) => {
			setCharacterName(event.target.value);
		},
		[setCharacterName]
	);

	const inputOccupation = useCallback(
		(event) => {
			setOccupation(event.target.value);
		},
		[setOccupation]
	);

	const inputSkill = useCallback(
		(event) => {
			setSkill(event.target.value);
		},
		[setSkill]
	);

	const inputUrl = useCallback(
		(event) => {
			setUrl(event.target.value);
		},
		[setUrl]
	);

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
	useEffect(() => {
		let id = window.location.pathname.split("/templates/CharaEdit")[1];
		if (id !== "") {
			id = id.split("/templates/Home")[1];
		}

		if (id !== "") {
			db.collection("characters")
				.doc(id)
				.get()
				.then((snapshot) => {
					const data = snapshot.data();
					setPlayerName(data.playerName);
					setTRPG(data.TRPG);
					setCharacterName(data.characterName);
					setOccupation(data.occupation);
					setSkill(data.skill);
					setGender(data.gender);
					setUrl(data.url);
				});
		}
	}, []);

	// console.log({ playerNames });
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
					value={playerName}
				></SelectBox>
				<SelectBox
					label="TRPG"
					options={TRPGs}
					required={true}
					select={setTRPG}
					value={TRPG}
				></SelectBox>
				<InputText
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
					value={gender}
				></SelectBox>
				<InputText
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
					label="登録"
					color="primary"
					size="large"
					variant="outlined"
					type="submit"
					onClick={() => {
						post(
							characterName,
							TRPG,
							characterName,
							occupation,
							skill,
							gender,
							url
						);
						// console.log("clicked!");
					}}
				></PrimaryButton>
			</div>
		</div>
	);
};

export default CharaEdit;
