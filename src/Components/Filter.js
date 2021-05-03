import React, { useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import CommitsContext from "../store/commits-context";

const Filter = () => {
	const { setFilter, filter } = useContext(CommitsContext);
	return (
		<InputGroup size="sm" className="mb-3 w-50">
			<InputGroup.Prepend>
				<InputGroup.Text id="inputGroup-sizing-sm">
					Filter by commit message
				</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				value={filter}
				aria-label="Small"
				aria-describedby="inputGroup-sizing-sm"
				onChange={(e) => {
					setFilter(e.target.value.trim());
				}}
			/>
		</InputGroup>
	);
};
export default Filter;
