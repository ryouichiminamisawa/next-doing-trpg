import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	formControl: {
		minwidth: 128,
		width: "100%",
	},
});
const SelectBox = (props) => {
	const classes = useStyles();
	// console.log({ playerNames });
	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel>{props.label} </InputLabel>
				<Select
					required={props.required}
					value={props.value}
					onChange={(e) => {
						props.select(e.target.value);
					}}
				>
					{props.options.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			{/* <h1>{props.label} </h1> */}
		</div>
	);
};

export default SelectBox;
