import { useEffect, useState } from "react";
import CommitContext from "./commits-context";

const CommitsProvider = (props) => {
	const [savedCommits, setSavedCommits] = useState([]);
	useEffect(() => {
		setSavedCommits(JSON.parse(localStorage.getItem("commits")) || []);
	}, []);
	const [commits, setCommits] = useState([]);
	const [totalCommits, setTotalCommits] = useState(0);
	const [user, setUser] = useState("");
	const [filter, setFilter] = useState("");

	const commitsContext = {
		commits,
		setCommits,
		filter,
		setFilter,
		savedCommits,
		setSavedCommits,
		user,
		setUser,
		totalCommits,
		setTotalCommits,
	};

	return (
		<CommitContext.Provider value={commitsContext}>
			{props.children}
		</CommitContext.Provider>
	);
};

export default CommitsProvider;
