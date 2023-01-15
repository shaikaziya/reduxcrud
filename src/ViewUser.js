import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Button from "@mui/material/Button";

export default function ViewUser() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://63650a617b209ece0f558d28.mockapi.io/userdata/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((use) => setUser(use));
  }, [id]);

  return (
    <div>
      <ul>
        <li>Name : {user.name}</li>
        <br></br>
        <li>status: {user.status}</li>
      </ul>
      <Button variant="contained" onClick={() => navigate(-1)}>
        <ArrowBackIosRoundedIcon />
        Back
      </Button>
    </div>
  );
}
