import React from "react";
import { Button } from "@material-ui/core";
export const PrimaryButton = (props) => {
	return (
		<div>
			<Button
				color={props.color}
				size={props.size}
				variant={props.variant}
				type={props.type}
				onClick={() => {
					props.onClick();
				}}
			>
				{props.label}
			</Button>
		</div>
	);
};
