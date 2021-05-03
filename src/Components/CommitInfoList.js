import React, { useContext } from "react";
import CommitInfo from "./CommitInfo";
import CommitsContext from "../store/commits-context";
import Spinner from "./Spinner";
import getFilteredCommits from "../utils/get-filtered-commits";

const CommitInfoList = (props) => {
	const commitsCtx = useContext(CommitsContext);
	const { filter, commits, savedCommits } = commitsCtx;
	const commitsToDisplay = props.saved
		? getFilteredCommits(filter, savedCommits)
		: getFilteredCommits(filter, commits);

	return props.loading ? (
		<Spinner />
	) : (
		commitsToDisplay.map((commit) => {
			return (
				<CommitInfo
					isSaved={props.saved}
					date={commit.date}
					message={commit.message}
					url={commit.url}
					name={commit.name}
					key={commit.id}
					id={commit.id}
				/>
			);
		})
	);
};

export default CommitInfoList;
