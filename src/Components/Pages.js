/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { getCommitsForUser } from "../utils/get-commits-for-user";
import CommitsContext from "../store/commits-context";
import { MAXIMUM_PAGES } from "../constants";

const Pages = (props) => {
	const commitsCtx = useContext(CommitsContext);
	const { user, setCommits, setTotalCommits } = commitsCtx;
	const totalPages = Math.ceil(commitsCtx.totalCommits / 30);

	const loadNextPage = (page) => {
		props.setLoading(true);
		getCommitsForUser(
			user,
			page,
			setCommits,
			props.setLoading,
			setTotalCommits
		);
	};

	useEffect(() => {
		props.setFirstPage(1);
		props.setActive("1");
		if (user !== "") {
			loadNextPage(1);
		}
	}, []);

	let items = [];
	const endLimit =
		totalPages >= MAXIMUM_PAGES
			? props.firstPage + MAXIMUM_PAGES - 1
			: totalPages;

	for (var i = props.firstPage; i <= endLimit; i++) {
		items.push(
			<Pagination.Item
				// eslint-disable-next-line no-loop-func
				onClick={(e) => {
					loadNextPage(e.target.text);
					props.setActive(e.target.text);
				}}
				key={i}
				active={props.active === i + ""}
			>
				{i}
			</Pagination.Item>
		);
	}
	return (
		<div>
			<Pagination className="mt-2">
				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.First
						onClick={(e) => {
							props.setFirstPage(1);
							loadNextPage(1);
							props.setActive("1");
						}}
					/>
				)}

				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.Prev
						onClick={(e) => {
							props.setFirstPage(props.firstPage - 1);
						}}
						disabled={props.firstPage <= 1}
					/>
				)}

				{items.map((item) => item)}

				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.Next
						onClick={(e) => {
							props.setFirstPage(props.firstPage + 1);
						}}
						disabled={props.firstPage + MAXIMUM_PAGES > totalPages}
					/>
				)}

				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.Last
						onClick={(e) => {
							props.setFirstPage(totalPages - (MAXIMUM_PAGES - 1));
							loadNextPage(totalPages);
							props.setActive(totalPages + "");
						}}
					/>
				)}
			</Pagination>
		</div>
	);
};

export default Pages;
