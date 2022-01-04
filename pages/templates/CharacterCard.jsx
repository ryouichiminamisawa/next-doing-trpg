import {
	CardMedia,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Avatar,
	IconButton,
} from "@material-ui/core";
import Image from "next/image";
import { MoreVert } from "@material-ui/icons";

export const DemoCard = (props) => {
	return (
		<div>
			<Card style={{ width: 250 }}>
				<CardHeader
					avatar={
						<Avatar>
							{
								<Image
									alt="クトゥルフ"
									src="/cthulhu.png"
									width={32}
									height={32}
								/>
							}
						</Avatar>
					}
					action={
						<IconButton>
							<MoreVert></MoreVert>
						</IconButton>
					}
					title={props.character.occupation}
					//title=occupation
					subheader={props.character.playerName}
					//subheader=playername
				></CardHeader>
				<CardMedia
					component="img"
					height="194"
					image={props.character.imageUrl}
				/>
				<CardContent>
					<Typography align="center" variant="h5">
						{props.character.characterName}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export const CharacterCard = (props) => {
	return (
		<div>
			<Card style={{ width: 250 }}>
				<CardHeader
					avatar={
						<Avatar>
							{
								<Image
									alt="クトゥルフ"
									src="/cthulhu.png"
									width={32}
									height={32}
								/>
							}
						</Avatar>
					}
					action={
						<IconButton>
							<MoreVert></MoreVert>
						</IconButton>
					}
					title={props.occupation}
					subheader={props.playerName}
				></CardHeader>
				<CardMedia
					component="img"
					height="194"
					image="https://firebasestorage.googleapis.com/v0/b/next-doing-trpg.appspot.com/o/characterImage%2F983ae1c0-s.png?alt=media&token=60fa77a2-758a-4915-aac0-ad6405551739"
				/>
				<CardContent>
					<Typography align="center" variant="h5">
						佐渡島鉄也
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};
