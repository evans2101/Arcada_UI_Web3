import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import SongCard from "../../components/cards/song_card";
import { styled } from "@mui/material/styles";
import { SongSamples } from "../../data/data";

const Collections = () => {
  const theme = useTheme();
  const SelectStyle = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    "& label": {
      fontWeight: "500",
      fontSize: "13px",
      color: "#FFFFFF",
      opacity: "0.5",
    },
    "& select": {
      background: "rgb(255 255 255 / 10%)",
      borderRadius: "8px",
      padding: "10px 20px",
      color: "rgb(255 255 255 / 90%)",
      "& option": {
        background: "rgb(40 39 43)",
        color: "#fff",
      },
    },
  }));
  return (
    // <h1>collections</h1>
    <Box
      bgcolor={theme.palette.secondary.light}
      sx={{ borderRadius: "10px", padding: "40px 30px" }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <Box
          as="div"
          sx={{
            marginBottom: "15px",
            // marginTop: `${isMarginTop ? "34px" : "0px"}`,
            fontSize: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>Collections</h4>
          <SelectStyle>
            <label>Filtered by:</label>
            <select>
              <option value="0">Most Recent</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">4</option>
            </select>
          </SelectStyle>
        </Box>
        <div>
          <Grid container spacing="15">
            {SongSamples.map((item, idx) => {
              return (
                <Grid key={idx} position={"relative"} item md={4}>
                  <SongCard {...item} addToPlayListIcon={true} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default Collections;
