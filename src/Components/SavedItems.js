import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import CommitInfoList from "./CommitInfoList";
import CommitsContext from "../store/commits-context";
import Filter from "./Filter";

const SavedItemsPage = () => {
	const commitsCtx = useContext(CommitsContext);
	const { savedCommits } = commitsCtx;
	return (
		<Container>
			{savedCommits.length > 0 && <Filter />}
			<CommitInfoList saved={true} />
		</Container>
	);
};

export default SavedItemsPage;
