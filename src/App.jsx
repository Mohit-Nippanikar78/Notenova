import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Root from "./Root";
import { Editbox } from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Editbox />} />
        {/*  <Route path="/products" element={<ProductCatalogue />} />
        <Route path="/login" element={<Login />} >
          <Route index element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
