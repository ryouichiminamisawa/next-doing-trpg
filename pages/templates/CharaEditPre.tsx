// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { app, db, FirebaseTimestamp } from "../../Firebase";
// import SelectBox from "../../components/UIKIT/SelectBox";
// import InputText from "../../components/UIKIT/InputText";
// import { PrimaryButton } from "../../components/UIKIT/PrimaryButton";
// import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
// import { getApp } from "firebase-admin/app";

// export type Character = {
// 	playerName: string;
// 	TRPG: string;
// 	characterName: string;
// 	occupation: string;
// 	skill: string;
// 	gender: string;
// 	url: string;
// };

// const [character, setCharacter] = useState<Character>({
// 	playerName: "",
// 	TRPG: "",
// 	characterName: "",
// 	occupation: "",
// 	skill: "",
// 	gender: "",
// 	url: "",
// });

// type FormValues = {
// 	playerName: string;
// 	TRPG: string;
// 	characterName: string;
// 	occupation: string;
// 	skill: string;
// 	gender: string;
// 	url: URL;
// };

// const AddCharaPost = (
// 	playerName: string,
// 	TRPG: string,
// 	characterName: string,
// 	occupation: string,
// 	skill: string,
// 	gender: string,
// 	url: string
// ) => {
// 	// const { playerName, TRPG, characterName, occupation, skill, gender, url } =
// 	// 	values;

// 	const firestore = getFirestore(app);

// 	addDoc(collection(firestore, "characters"), {
// 		playerName: playerName,
// 		TRPG: TRPG,
// 		characterName: characterName,
// 		occupation: occupation,
// 		skill: skill,
// 		gender: gender,
// 		url: url,
// 		// created_at: FirebaseTimestamp.(),
// 	});
// };

// export default function CharaEditPre() {
// 	const playerNames = [
// 		{ id: "erickwolf", name: "Erick Wolf" },
// 		{ id: "kuro", name: "クロ" },
// 		{ id: "sabakan", name: "鯖缶" },
// 		{ id: "shigurekintoki", name: "時雨金時" },
// 		{ id: "nyantaro", name: "にゃんたろー" },
// 		{ id: "Leopold", name: "レオポルド" },
// 	];

// 	const TRPGs = [
// 		{ id: "callofchuluhu", name: "クトゥルフ" },
// 		{ id: "konosuba", name: "このすば！" },
// 		{ id: "arianrhod", name: "アリアンロッド2E" },
// 	];
// 	const genders = [
// 		{ id: "male", name: "男" },
// 		{ id: "female", name: "女" },
// 		{ id: "others", name: "その他" },
// 	];

// 	return (
// 		<div>
// 			<h1>キャラクター編集画面です！</h1>
// 			<Link href="./Home">home画面に飛びます</Link>
// 			<div>
// 				<SelectBox
// 					label="プレイヤー名"
// 					options={playerNames}
// 					required={true}
// 					select={setPlayerName}
// 					value={playerName}
// 				></SelectBox>
// 				<SelectBox
// 					label="TRPG"
// 					options={TRPGs}
// 					required={true}
// 					select={setTRPG}
// 					value={TRPG}
// 				></SelectBox>
// 				<InputText
// 					label="キャラクター名"
// 					fullWidth={true}
// 					multiline={true}
// 					required={true}
// 					onChange={inputCharacterName}
// 					rows={1}
// 					value={characterName}
// 					type={"text"}
// 				></InputText>
// 				<InputText
// 					label="職業"
// 					fullWidth={true}
// 					multiline={true}
// 					required={true}
// 					onChange={inputOccupation}
// 					rows={1}
// 					value={occupation}
// 					type={"text"}
// 				></InputText>
// 				<InputText
// 					label="スキル"
// 					fullWidth={true}
// 					multiline={true}
// 					required={true}
// 					onChange={inputSkill}
// 					rows={5}
// 					value={skill}
// 					type={"text"}
// 				></InputText>
// 				<SelectBox
// 					label="性別"
// 					options={genders}
// 					required={true}
// 					select={setGender}
// 					value={gender}
// 				></SelectBox>
// 				<InputText
// 					label="url"
// 					fullWidth={true}
// 					multiline={true}
// 					required={true}
// 					onChange={inputUrl}
// 					rows={1}
// 					value={url}
// 					type={"text"}
// 				></InputText>
// 				<PrimaryButton
// 					label="キャラクター情報を保存"
// 					color="primary"
// 					size="large"
// 					variant="outlined"
// 					type="submit"
// 					onClick={() => {
// 						// const router = useRouter();
// 						// const handleClick = (e) => {
// 						// 	e.preventDefault();
// 						// 	router.push("/Home");
// 						// };
// 						handleClick(
// 							saveCharacter(
// 								playerName,
// 								TRPG,
// 								characterName,
// 								occupation,
// 								skill,
// 								gender,
// 								url
// 							)
// 						);
// 						// characterName,
// 						// TRPG,
// 						// characterName,
// 						// occupation,
// 						// skill,
// 						// gender,
// 						// url
// 						// console.log("clicked!");
// 					}}
// 				></PrimaryButton>
// 			</div>
// 		</div>
// 	);
// }
