import AddUsers from "../Pages/AddUsers";
import UsersList from "../Pages/UsersList";
import Dashboard from "../Components/Dashboard";
import Login from "../Pages/Login";
import {
  Outlet,
  Route,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import SignUp from "../Pages/SignUp";
import { useEffect, useState } from "react";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isLoggedIn = () => localStorage.getItem("status");
  const isRegistered = () => localStorage.getItem("registeredUser");

  const login = Boolean(isLoggedIn());
  const isRegisteredUser = Boolean(isRegistered());
  // const AppAuth = () => {};

  useEffect(() => {
    if (
      !login &&
      !isRegisteredUser &&
      !["/login", "/signup"].includes(window.location.pathname)
    ) {
      setLoading(false);
      return navigate("/login");
    }

    setLoading(false);
  });

  if (loading) return <h1>Loading</h1>;
  return <Outlet />;
};
const AppRoute = () => {
  // console.log(localStorage.getItem("registeredUser"), "userRegistration");
  return createRoutesFromElements(
    <Route element={<Root />}>
      {/* <Route element={<AppAuth />}> */}
      <Route element={<Dashboard />}>
        <Route path="/" element={<AddUsers />} />
        <Route path="users" element={<UsersList />} />
      </Route>
      {/* </Route> */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  );
};

export default AppRoute;
