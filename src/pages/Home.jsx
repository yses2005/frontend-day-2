import { Link } from "react-router-dom";

import { FullscreenWrapper } from "components";
import useNewDocumentTitle from "hooks/useNewDocumentTitle";

function Home() {
  useNewDocumentTitle("Home");

  return (
    <FullscreenWrapper>
      Home <Link to="/login">Login</Link>
    </FullscreenWrapper>
  );
}

export default Home;
