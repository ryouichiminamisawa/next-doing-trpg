import firebase, { db, FirebaseTimestamp } from "../Firebase";

export const AddCharaPost = async () => {
	const { playerName, TRPG, characterName, occupation, skill, gender, url } =
		values;

	await db.collection("characters").doc().set({
		playerName: playerName,
		TRPG: TRPG,
		characterName: characterName,
		occupation: occupation,
		skill: skill,
		gender: gender,
		url: url,
		created_at: FirebaseTimestamp(),
	});
	alert("キャラクターが投稿されました!");
};
