import React from "react";
import { Spinner as Loader } from "react-bootstrap";
const Spinner = () => {
	return (
		<Loader animation="border" role="status" className="align-self-center">
			<span className="sr-only">Loading...</span>
		</Loader>
	);
};

export default Spinner;
