import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";


function Home() {
  const data = useSelector((store) => store.ContentSlice.data);
  console.log(data);

  return (
    <Box
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
 
      <Typography variant="h1" color="">
        Kill Zone
      </Typography>
      <Link to={"/create"}>
        <Button variant="contained">Create</Button>
      </Link>
      {data ? (
        <Grid container>
          {data.map((item) => {
            return (
              <Grid key={item.id} margin={2}>
                <CardComponent data={item} />
              </Grid>
            );
          })}
        </Grid>
      ) : null}
    </Box>
  );
}

export default Home;
