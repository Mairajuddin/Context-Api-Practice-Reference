import { Outlet, Route, createRoutesFromElements } from "react-router-dom";
import AddUsers from "../Pages/AddUsers";
import UsersList from "../Pages/UsersList";
import { Dashboard } from "@mui/icons-material";
const AppRoute = () => {
  return createRoutesFromElements(
    <Route element={<Dashboard />}>
      <Route path="/" element={<Outlet />}>
        <Route index element={<AddUsers />} />
        <Route path="users" element={<UsersList />} />
      </Route>
    </Route>
  );
};

export default AppRoute;
