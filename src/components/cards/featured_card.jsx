import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FeturedCardStyled } from "./featured_card_styled";
// import { AddIcon, AddToPlaylistIcon } from "../../svg";
import { usePlayer } from "../../context/playerContext";
import { ModalElement } from "../modal/modal";
import { CustomButton } from "../button/button";
import { previewStaticImage } from "../../tools";
import { staticIcons } from "../../data/data";
import { Box, Typography } from "@mui/material";

const FeaturedCard = (props) => {
  const {
    name,
    bannerImg,
    totalVideo,
    artistImg,
    artistProfileUrl,
    price = 7332,
    cryptoPrice = 2.5,
    showPrice
  } = props;
  const { setSong } = usePlayer();
  const navigate = useNavigate();

  const [details, setDetails] = React.useState(false);
  // const theme = useTheme();

  return (
    <FeturedCardStyled>
      <ModalElement
        isOpen={details}
        onClose={() => setDetails(false)}
        name={name}
        coverImg={bannerImg}
        artistImg={artistImg}
        artistProfileUrl={artistProfileUrl}
      />
      <div className="inner-card">
        <Box sx={{ textAlign: 'center' }}>
          <img
            className="card__profile-main-img"
            src={`${process.env.PUBLIC_URL}${bannerImg}`}
            alt="card img"
          />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant='h5' component='h5' sx={{ fontWeight: 'bold', fontSize: '18px' }}>{name}</Typography>
          <Typography variant='h6' component='p' sx={{ color: '#a3a3a3', fontSize: '14px' }}>
            {totalVideo > 1 ? `${totalVideo} videos` : `${totalVideo} video`}
          </Typography>
        </Box>
        <div className="card__profile-btns">
          <CustomButton
            buttonText="Video"
            startIcon={previewStaticImage(staticIcons?.videoIcon)}
            type="primary"
            left_icon_size={30}
            onClick={() => navigate("/snoopdogg/death_row_session")}
          />
          <CustomButton
            buttonText="Audio"
            startIcon={previewStaticImage(staticIcons?.audioIcon)}
            type="default"
            left_icon_size={30}
            onClick={() => setSong(props)}
          />
        </div>
        {showPrice ? (
          <div className="card__price">
            <p>Purchase Price</p>
            <span>
              <h3>USD ${price}</h3>
              <span>
                <img
                  src={previewStaticImage(staticIcons?.etherWhite)}
                  alt="crypto-logo"
                />
                <h4>{cryptoPrice} ETH</h4>
              </span>
            </span>
          </div>
        ) : null}
      </div>
    </FeturedCardStyled>
  );
};

FeaturedCard.propTypes = {
  name: PropTypes.string,
  artistName: PropTypes.string,
  bannerImg: PropTypes.string,
  artistImg: PropTypes.string,
  artistProfileUrl: PropTypes.string,
  price: PropTypes.number,
  cryptoPrice: PropTypes.number,
  showPrice: PropTypes.number,
  addToPlayListIcon: PropTypes.string,
  audioSource: PropTypes.string,
};

export default FeaturedCard;
