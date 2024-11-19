import { Send } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import RadioButtonsGroup from "./RadioButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { addData, reset, update } from "../state/ContentSlice";
import { Link } from "react-router-dom";

function Create() {
  const dispatch = useDispatch();
  const temp = useSelector((store) => store.ContentSlice.temp);
  const data = useSelector((store) => store.ContentSlice.data);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" color="secondary">
        CREATE NOTE
      </Typography>
      <TextField
        color="secondary"
        variant="outlined"
        focused
        label="Title"
        sx={{ input: { color: "white" }, margin: 2 }}
        onChange={(e) => dispatch(update({ ...temp, title: e.target.value }))}
      />
      <TextField
        color="secondary"
        variant="outlined"
        focused
        label="Detail"
        multiline
        rows={4}
        sx={{ input: { color: "white" }, margin: 2 }}
        inputProps={{ style: { color: "white" } }}
        onChange={(e) => dispatch(update({ ...temp, detail: e.target.value }))}
      />
      <RadioButtonsGroup />
      <Link to={"/"}>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<Send />}
          sx={{ margin: 2 }}
          onClick={() => {
            dispatch(update({ ...temp, id: temp.id + 1 }));
            dispatch(addData(temp));

            console.log(data);
            console.log(temp);
          }}
        >
          Submit
        </Button>
      </Link>
    </Box>
  );
}

export default Create;
