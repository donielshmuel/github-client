import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./Routers/AppRouter";
import CommitsProvider from "./store/commits-provider";

const App = () => {
	return (
		<CommitsProvider>
			<AppRouter />
		</CommitsProvider>
	);
};

export default App;
