import React, { useContext } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { getCommitsForUser } from "../utils";
import CommitsContext from "../store/commits-context";

const Search = (props) => {
	const commitsCtx = useContext(CommitsContext);
	const { setCommits, setTotalCommits, user, setUser, setFilter } = commitsCtx;

	const submitSearch = (e) => {
		e.preventDefault();
		setFilter("");
		setCommits([]);
		setTotalCommits(0);
		props.setLoading(true);
		props.setActive("1");
		props.setFirstPage(1);
		getCommitsForUser(
			user,
			1,
			setCommits,
			props.setLoading,
			setTotalCommits,
			props.setShow
		);
	};
	return (
		<div>
			<Form inline className="mt-3 w-100 mb-5" onSubmit={submitSearch}>
				<FormControl
					type="text"
					placeholder="Search for github user"
					className="mr-sm-2"
					value={user}
					onChange={(e) => {
						setUser(e.target.value);
					}}
				/>
				<Button type="submit" variant="outline-success" disabled={user === ""}>
					Search
				</Button>
			</Form>
		</div>
	);
};

export default Search;
