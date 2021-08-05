import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FullscreenWrapper } from "components";
import useNewDocumentTitle from "hooks/useNewDocumentTitle";

function Home() {
	const { isLoggedIn } = useSelector((state) => state.auth);

	useNewDocumentTitle("Home");

	return (
		<FullscreenWrapper>
			Home <Link to="/login">Login</Link>
			{isLoggedIn && "Welcome! You are logged in"}
		</FullscreenWrapper>
	);
}

export default Home;
