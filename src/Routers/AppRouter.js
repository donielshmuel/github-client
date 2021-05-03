import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import HomePage from "../Components/HomePage";
import SavedItemsPage from "../Components/SavedItems";
const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/saved" component={SavedItemsPage} />
			</Switch>
		</Router>
	);
};
export default AppRouter;
