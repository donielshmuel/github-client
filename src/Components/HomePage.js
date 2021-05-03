import React, { useContext, useState } from "react";
import Search from "./Search";
import CommitInfoList from "./CommitInfoList";
import { Container } from "react-bootstrap";
import Pages from "./Pages";
import Error from "./Error";
import CommitsContext from "../store/commits-context";
import Filter from "./Filter";

const HomePage = () => {
	const commitsCtx = useContext(CommitsContext);
	const { commits } = commitsCtx;
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [active, setActive] = useState(1);
	const [firstPage, setFirstPage] = useState(1);

	return (
		<Container>
			{show && <Error setShow={setShow} />}
			<Search
				setLoading={setLoading}
				setShow={setShow}
				setActive={setActive}
				setFirstPage={setFirstPage}
			/>
			{commits.length > 0 && <Filter />}
			<CommitInfoList loading={loading} saved={false} />
			<Pages
				setLoading={setLoading}
				active={active}
				setActive={setActive}
				firstPage={firstPage}
				setFirstPage={setFirstPage}
			/>
		</Container>
	);
};

export default HomePage;
