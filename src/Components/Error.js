import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ setShow }) => {
	return (
		<Alert variant="danger" onClose={() => setShow(false)} dismissible>
			<Alert.Heading>Error</Alert.Heading>
			<p>This user does not exist, please try again!</p>
		</Alert>
	);
};
export default Error;
