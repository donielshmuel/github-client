/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { getCommitsForUser } from "../utils/get-commits-for-user";
import CommitsContext from "../store/commits-context";
import { MAXIMUM_PAGES } from "../constants";

const Pages = (props) => {
	const commitsCtx = useContext(CommitsContext);
	const { user, setCommits, setTotalCommits } = commitsCtx;
	const totalPages = Math.ceil(commitsCtx.totalCommits / 30);
	const [firstPage, setFirstPage] = useState(1);
	const [active, setActive] = useState(1);

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
		setFirstPage(1);
		setActive("1");
		if (user !== "") {
			loadNextPage(1);
		}
	}, []);

	let items = [];
	const endLimit =
		totalPages >= MAXIMUM_PAGES ? firstPage + MAXIMUM_PAGES - 1 : totalPages;

	for (var i = firstPage; i <= endLimit; i++) {
		items.push(
			<Pagination.Item
				// eslint-disable-next-line no-loop-func
				onClick={(e) => {
					loadNextPage(e.target.text);
					setActive(e.target.text);
				}}
				key={i}
				active={active === i + ""}
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
							setFirstPage(1);
							loadNextPage(1);
							setActive("1");
						}}
					/>
				)}

				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.Prev
						onClick={(e) => {
							setFirstPage(firstPage - 1);
						}}
						disabled={firstPage <= 1}
					/>
				)}

				{items.map((item) => item)}

				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.Next
						onClick={(e) => {
							setFirstPage(firstPage + 1);
						}}
						disabled={firstPage + MAXIMUM_PAGES > totalPages}
					/>
				)}

				{totalPages >= MAXIMUM_PAGES && (
					<Pagination.Last
						onClick={(e) => {
							setFirstPage(totalPages - (MAXIMUM_PAGES - 1));
							loadNextPage(totalPages);
							setActive(totalPages + "");
						}}
					/>
				)}
			</Pagination>
		</div>
	);
};

export default Pages;
