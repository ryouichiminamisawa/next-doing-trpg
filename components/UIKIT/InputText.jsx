import React from "react";
import { TextField } from "@material-ui/core";

const InputText = (props) => {
	return (
		<div>
			<TextField label={props.label}></TextField>
			{/* <h1>{props.label} </h1> */}
		</div>
	);
};

export default InputText;
