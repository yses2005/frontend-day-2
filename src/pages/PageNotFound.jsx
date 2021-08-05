import { FullscreenWrapper } from "components";
import useNewDocumentTitle from "hooks/useNewDocumentTitle";

function PageNotFound() {
  useNewDocumentTitle("404");
  return <FullscreenWrapper>404 PAGE NOT FOUND</FullscreenWrapper>;
}

export default PageNotFound;
