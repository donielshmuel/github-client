import React from "react";

const CommitContext = React.createContext({
	commits: [],
	savedCommits: [],
	totalCommits: 0,
	filter: "",
	user: "",
});

export default CommitContext;
