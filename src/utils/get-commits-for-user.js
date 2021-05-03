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
			if (events.items.length > 0) {
				setTotalCommits(events.totalCount > 1000 ? 1000 : events.totalCount);
				setCommits(
					events.items
						.slice(0, 1000)
						.map((item, index) => ({
							message: item.commit.message,
							date: item.commit.author.date,
							url: item.htmlUrl,
							name: item.author.login,
							id: `${item.author.login}-${moment(
								item.commit.author.date
							).valueOf()}-${index}`,
						}))
						.sort((a, b) => {
							return moment(a.date).valueOf() - moment(b.date).valueOf();
						})
				);
				setLoading(false);
				if (setShow) {
					setShow(false);
				}
			} else {
				setLoading(false);
				if (setShow) {
					setShow(true);
				}
			}
		})
		.catch((e) => {
			console.log(e);
			setLoading(false);
			if (setShow) {
				setShow(true);
			}
		});
};
