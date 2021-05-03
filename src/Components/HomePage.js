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

	return (
		<Container>
			{show && <Error setShow={setShow} />}
			<Search setLoading={setLoading} setShow={setShow} />
			{commits.length > 0 && <Filter />}
			<CommitInfoList loading={loading} saved={false} />
			<Pages setLoading={setLoading} />
		</Container>
	);
};

export default HomePage;
