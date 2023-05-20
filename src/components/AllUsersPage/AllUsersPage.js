import { useEffect, useState } from "react";
import API_URL from "./../../config/config";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { setUsersData } from "../../models/sign-forms/actions";

function AllUsersPage(props) {
  const { setUsersData } = props;
  const [setUsers] = useState([]);
  const [setHasError] = useState(false);
  const [setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
      setUsersData(data);
      setLoading(false);
    } catch (error) {
      setHasError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">FullName</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">IsAdmin</TableCell>
          </TableRow>
        </TableHead>

        {/* <TableBody>
          {loading ? (
            <div>Loading...</div>
          ) : hasError ? (
            <div>Error occured. </div>
          ) : (
            users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.fullName}</TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">
                  {user.isAdmin ? "Admin" : null}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.signForms.usersData.username,
    password: state.signForms.usersData.password,
    confirmPassword: state.signForms.usersData.confirmPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setUsersData: (payload) => dispatch(setUsersData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);
