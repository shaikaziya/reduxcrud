import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

import EditIcon from "@mui/icons-material/Edit";

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://63650a617b209ece0f558d28.mockapi.io/userdata")
      .then((data) => data.json())
      .then((user) => setUsers(user.reverse()));
  };
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {users.map((use, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{use.name}</td>
                <td>{use.status}</td>
                <td>
                  <IconButton
                    onClick={() => {
                      navigate(`/${use.id}`);
                    }}
                  >
                    <VisibilityIcon color="secondary" />
                  </IconButton>
                </td>
                <td>
                  <IconButton
                    onClick={() => {
                      fetch(
                        `https://63650a617b209ece0f558d28.mockapi.io/userdata/${use.id}`,
                        { method: "DELETE" }
                      ).then(() => getUsers());
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </td>
                <td>
                  <IconButton
                    onClick={() => {
                      navigate(`/edit-user/${use.id}`);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
