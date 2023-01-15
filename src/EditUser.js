import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function EditUser() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://63650a617b209ece0f558d28.mockapi.io/userdata/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((use) => setUser(use));
  }, []);

  return user ? <EditUserForm user={user} /> : "Loading..";
}

function EditUserForm({ user }) {
  const [name, setName] = useState(user.name);
  const [status, setStatus] = useState(user.status);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>Edit A User</h2>
        <TextField
          fullWidth
          label="Edit name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="edit name"
        />
        <br></br>
        <br></br>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={(event) => setStatus(event.target.value)}
          >
            <MenuItem value={1 + "------>Success"}>Success</MenuItem>
            <MenuItem value={0 + "------>Pending"}>Pending</MenuItem>
          </Select>
        </FormControl>

        <div>
          <Button
            variant="contained"
            onClick={() => {
              const updatedUser = {
                name: name,
                status: status,
              };
              fetch(
                `https://63650a617b209ece0f558d28.mockapi.io/userdata/${user.id}`,
                {
                  method: "PUT",
                  body: JSON.stringify(updatedUser),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((data) => data.json())
                .then(() => navigate("/"));
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
