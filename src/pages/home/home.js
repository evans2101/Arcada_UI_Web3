import React from "react";
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";

import SongCard from "../../components/cards/song_card";
import { SongSamples, featuredSamples } from "../../data/data";

import "swiper/css";
import "swiper/css/navigation";
import FeaturedCard from "../../components/cards/featured_card";

function handlePrev(node) {
  document.querySelectorAll(".swiper-button-prev")[node].click();
}
function handleNext(node) {
  document.querySelectorAll(".swiper-button-next")[node].click();
}
const Home = () => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.secondary.light}
      sx={{ borderRadius: "10px", padding: "40px 30px", overflow: "hidden" }}
    >
      <Section node={0} title="Trending Videos" />
      <Section node={1} isMarginTop title="Featured Playlists" featured={true} />
      <Section node={2} isMarginTop title="Recently Played Videos" />
    </Box>
  );
};

export const Section = ({ isMarginTop, title, node, featured }) => {
  return (
    <Box
      sx={{
        marginBottom: "20px",
        ".swiper-button-next, .swiper-button-prev": {
          display: "none",
        },
      }}
    >
      <Box
        as="div"
        sx={{
          marginBottom: "15px",
          marginTop: `${isMarginTop ? "34px" : "0px"}`,
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>{title}</Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <div onClick={() => handlePrev(node)}>
            <svg
              width="56"
              height="28"
              viewBox="0 0 56 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.95">
                <rect
                  x="55.5"
                  y="27.5"
                  width="55"
                  height="27"
                  rx="5.5"
                  transform="rotate(180 55.5 27.5)"
                  fill="#222126"
                />
                <path
                  d="M30 10L26 14L30 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="55.5"
                  y="27.5"
                  width="55"
                  height="27"
                  rx="5.5"
                  transform="rotate(180 55.5 27.5)"
                  stroke="white"
                />
              </g>
            </svg>
          </div>
          <div onClick={() => handleNext(node)}>
            <svg
              width="56"
              height="28"
              viewBox="0 0 56 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.95">
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="27"
                  rx="5.5"
                  fill="#222126"
                />
                <path
                  d="M26 18L30 14L26 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="27"
                  rx="5.5"
                  stroke="white"
                />
              </g>
            </svg>
          </div>
        </Box>
      </Box>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {featured ? 
          (featuredSamples.map((item) => (
            <SwiperSlide key={item.id}>
              <FeaturedCard {...item} />
            </SwiperSlide>
          )))
          :
          (SongSamples.map((item) => (
            <SwiperSlide key={item.id}>
              <SongCard {...item} />
            </SwiperSlide>
          )))
        }
      </Swiper>
    </Box>
  );
};

Section.propTypes = {
  isMarginTop: PropTypes.bool,
  title: PropTypes.string,
  node: PropTypes.number,
};

export default Home;
