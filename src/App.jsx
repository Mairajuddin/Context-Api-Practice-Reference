// import AddUsers from "./Pages/AddUsers";
// import UsersList from "./Pages/UsersList";

// function App() {
//   return (
//     <>
//       <AddUsers />
//       <UsersList />
//     </>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppRoute from "./route/AppRoute.jsx";
import AppRoute from "../src/AppRouter/AppRoute";
import "./App.css";
function App() {
  const router = createBrowserRouter(AppRoute());
  return <RouterProvider router={router} />;
}

export default App;
