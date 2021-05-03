import React, { useState, useContext } from "react";
import { Card, ToggleButton, Button } from "react-bootstrap";
import CommitsContext from "../store/commits-context";

const CommitInfo = ({ date, message, url, id, isSaved }) => {
	const commitsCtx = useContext(CommitsContext);
	const { savedCommits, setSavedCommits } = commitsCtx;

	const [checked, setChecked] = useState(
		savedCommits.find((commit) => {
			return commit.id === id;
		})
	);
	return (
		<Card className="mt-3 ">
			<Card.Body>
				<Card.Title>{new Date(date).toLocaleDateString()}</Card.Title>

				<Card.Text>{message}</Card.Text>
				<div>
					<a href={url} target="_blank" rel="noreferrer">
						view code
					</a>
				</div>

				{!isSaved && (
					<ToggleButton
						size="sm"
						className="mt-2"
						type="checkbox"
						variant="secondary"
						name="radio"
						checked={checked}
						onChange={() => {
							const commit = { date, message, url, id };
							if (!checked) {
								localStorage.setItem(
									"commits",
									savedCommits
										? JSON.stringify([...savedCommits, commit])
										: JSON.stringify([commit])
								);
							} else {
								localStorage.setItem(
									"commits",
									JSON.stringify(savedCommits.filter((item) => item.id !== id))
								);
							}
							setSavedCommits(JSON.parse(localStorage.getItem("commits")));
							setChecked(!checked);
						}}
					>
						read later
					</ToggleButton>
				)}
				{isSaved && (
					<Button
						onClick={() => {
							localStorage.setItem(
								"commits",
								JSON.stringify(savedCommits.filter((item) => item.id !== id))
							);
							setSavedCommits(savedCommits.filter((item) => item.id !== id));
						}}
					>
						remove
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default CommitInfo;
