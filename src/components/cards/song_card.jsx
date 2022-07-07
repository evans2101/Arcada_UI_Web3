import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { SongCardStyled } from "./song_cart_styled";
import { AddIcon, AddToPlaylistIcon } from "../../svg";
import { usePlayer } from "../../context/playerContext";
import { ModalElement } from "../modal/modal";
import { CustomButton } from "../button/button";
import { previewStaticImage } from "../../tools";
import { staticIcons } from "../../data/data";

const SongCard = (props) => {
  const {
    songName,
    artistName,
    bannerImg,
    artistImg,
    artistProfileUrl,
    price = 7332,
    cryptoPrice = 2.5,
    showPrice,
    addToPlayListIcon,
  } = props;
  const { setSong } = usePlayer();
  const navigate = useNavigate();

  const [details, setDetails] = React.useState(false);
  // const theme = useTheme();

  return (
    <SongCardStyled>
      <ModalElement
        isOpen={details}
        onClose={() => setDetails(false)}
        songName={songName}
        artistName={artistName}
        coverImg={bannerImg}
        artistImg={artistImg}
        artistProfileUrl={artistProfileUrl}
      />
      <div className="inner-card">
        <img
          className="card__profile-main-img"
          src={`${process.env.PUBLIC_URL}${bannerImg}`}
          alt="card img"
        />
        <div className="add-icon">
          {addToPlayListIcon ? (
            <AddToPlaylistIcon style={{ width: 42, height: 42 }} />
          ) : (
            <AddIcon onClick={() => setDetails(true)} />
          )}
        </div>
        <div className="card__profile">
          <Link to={`/${artistProfileUrl}`}>
            <div className="card__profile-left">
              <img
                className="card__profile-img"
                src={`${process.env.PUBLIC_URL}${artistImg}`}
                alt="profile"
              />
              <div className="card__profile-section">
                <h5>{songName}</h5>
                <p>{artistName}</p>
              </div>
            </div>
          </Link>

          <div className="card__profile-right">
            <img
              className="card__profile-heart"
              src={previewStaticImage(staticIcons?.heartFull)}
              alt="heart"
            />
            <span>65</span>
          </div>
        </div>

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
    </SongCardStyled>
  );
};

SongCard.propTypes = {
  songName: PropTypes.string,
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

export default SongCard;
