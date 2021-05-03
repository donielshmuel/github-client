import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CommitsContext from "../store/commits-context";

const Header = () => {
	const commitsCtx = useContext(CommitsContext);
	const { setFilter } = commitsCtx;
	return (
		<Navbar bg="light" expand="lg">
			<LinkContainer
				to="/"
				onClick={() => {
					setFilter("");
				}}
			>
				<Navbar.Brand>Home</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer
						to="/saved"
						onClick={() => {
							setFilter("");
						}}
					>
						<Nav.Link>saved</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
