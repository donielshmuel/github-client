const getFilteredCommits = (filter, commits) => {
	return filter === ""
		? commits
		: commits.filter((commit) =>
				commit.message.toLowerCase().includes(filter.toLowerCase())
		  );
};
export default getFilteredCommits;
