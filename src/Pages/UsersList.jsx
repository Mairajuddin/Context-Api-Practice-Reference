import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import UserContext from "./UserContext";
import UserContext from "../context/UserContext";

const UsersList = () => {
  const { user } = useContext(UserContext);
  console.log(user, "user hy ye ");
  //   const check = user?.map((data, index) => {
  //     user.id = index + 1;
  //     return data;
  //   });

  const columns = [
    { field: "name", headerName: "Name", width: 150, flex: 1 },
    { field: "email", headerName: "Email", width: 150, flex: 1 },
    { field: "profession", headerName: "Profession", width: 150, flex: 1 },
    { field: "address", headerName: "Address", width: 150, flex: 1 },
  ];
  //   const data = user;
  //   const rows = check.length > 0 ? check : [];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        padding: "20px",
        height: "300px",
        width: "80%",
      }}
    >
      {/* <Typography>{user.name}</Typography>
      <Typography>{user.email}</Typography>
      <Typography>{user.profession}</Typography>
      <Typography>{user.address}</Typography> */}
      <DataGrid
        rows={user || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default UsersList;
