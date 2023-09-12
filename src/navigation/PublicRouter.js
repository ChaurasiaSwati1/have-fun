import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "../pages/NoPage";
import Layout from "../layouts/Layout";

function PublicRouter() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default PublicRouter;
