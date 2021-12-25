import React from "react";
import { TextField } from "@material-ui/core";

const InputText = (props) => {
	return (
		<div>
			<TextField
				label={props.label}
				fullWidth={props.fullWidth}
				multiline={props.multiline}
				onChange={props.onChange}
				rows={props.rows}
				value={props.value}
				type={props.type}
			></TextField>
			{/* <h1>{props.label} </h1> */}
		</div>
	);
};

export default InputText;
