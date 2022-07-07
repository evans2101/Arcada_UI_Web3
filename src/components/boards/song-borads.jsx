import React from "react";
import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";

import SongCard from "../cards/song_card";

const SongBoard = ({ isMarginTop, title, carts }) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Box
        as="div"
        sx={{
          marginBottom: "30px",
          marginTop: `${isMarginTop ? "60px" : "0px"}`,
          fontSize: "24px",
        }}
      >
        {title}
      </Box>
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {carts?.map((item, idx) => (
            <Grid key={idx} item sm={12} md={6} lg={4} xl={4} xx={3}>
              <SongCard {...item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

SongBoard.propTypes = {
  isMarginTop: PropTypes.bool,
  title: PropTypes.string,
  carts: PropTypes.array,
};

export default SongBoard;
