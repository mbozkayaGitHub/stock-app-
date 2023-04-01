import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getSuccess, fetchFail, fetchStart } from "../features/stockSlice";

const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // const getFirms = async () => {
  //   const BASE_URL = "https://12256.fullstack.clarusway.com/";
  //   dispatch(fetchStart());
  //   const url = "firms";

  //   try {
  //     const { data } = await axios(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };
   const {getStockData} = useStockCall()
   const {firms} = useSelector((state)=> state.stock)
  useEffect(() => {
    // getFirms();

    getStockData("firms")
  }, []);

      console.log(firms);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>
      {firms?.map((firm)=> (
        <Grid container sx={}>
          <Grid item key={firm.id}>
            <FirmCard firm={firm}/>

          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Firms;
