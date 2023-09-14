import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Layout from "layouts";
import LocationDetailsScreen from "screens/locationDetails";
import LoginScreen from "screens/login";
import RegisterScreen from "screens/register";

const PrivateRoute = (props) => {
  const Authtoken = sessionStorage.getItem("token");
  return Authtoken ? (
    <Outlet />
  ) : (
    // <Navigate to='/login' />
    <Outlet />
  );
};
const PublicRoute = (props) => {
  const Authtoken = sessionStorage.getItem("token");
  return Authtoken ? <Navigate to={-1} /> : <Outlet />;
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/locationDetails" element={<LocationDetailsScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
