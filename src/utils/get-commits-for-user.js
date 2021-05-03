const moment = require("moment");
const Octokat = require("octokat");
const octo = new Octokat({
	acceptHeader: "application/vnd.github.cloak-preview",
});

export const getCommitsForUser = (
	user,
	page = 1,
	setCommits,
	setLoading,
	setTotalCommits,
	setShow = null
) => {
	return octo
		.fromUrl(
			`https://api.github.com/search/commits?q=author:${user}&page=${page}`
		)
		.fetch()
		.then((events) => {
			setTotalCommits(events.totalCount > 1000 ? 1000 : events.totalCount);
			setCommits(
				events.items
					.slice(0, 1000)
					.map((item, index) => ({
						message: item.commit.message,
						date: item.commit.author.date,
						url: item.htmlUrl,
						id: `${moment(item.commit.author.date).valueOf()}-${index}`,
					}))
					.sort((a, b) => {
						return moment(a.date).valueOf() - moment(b.date).valueOf();
					})
			);
			setLoading(false);
			if (setShow) {
				setShow(false);
			}
		})
		.catch((e) => {
			setLoading(false);
			if (setShow) {
				setShow(true);
			}
		});
};
