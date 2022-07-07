import * as React from "react";
import { Modal, Backdrop, Fade } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../button/button";
import { Link } from "react-router-dom";
const ModalBody = styled("div")(({ theme }) => ({
  background: "#322D35",
  padding: "10px",
  maxWidth: "400px",
  height: "450px",
  borderRadius: "18.022px",
  transition: "all 0.4s ease",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  "& h3, h2 , p": {
    color: "white",
    margin: "0px",
  },
  "& > a": {
    fontSize: "18px",
  },
  "& > span.modal__content": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& > div": {
      maxWidth: 250,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      background: "#000",
      borderRadius: "18.022px",
      border: "2px solid #AB45E7",

      padding: 10,
      "& > img": {
        borderRadius: "18.022px",
        width: "100%",
      },
    },
    "& > span": {
      width: "100%",
      marginTop: "10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      "& > img": {
        width: "45px",
        height: "45px",
      },
      "& > span": {
        marginLeft: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
        "& > p": {
          marginBottom: 10,
          color: "#ffffff80",
        },
      },
    },
  },
  "& > span.modal__action": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& > button": {
      margin: "0px 10px",
      flex: 1,
    },
  },
}));

export function ModalElement({
  isOpen,
  onClose,
  coverImg,
  artistImg,
  songName,
  artistName,
  artistProfileUrl,
}) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <ModalBody>
        <h2>test modal</h2>
        <span className="modal__content">
          <div>
            <img src={coverImg} alt="cover" />
          </div>

          <span>
            <img src={artistImg} alt="cover" />
            <span>
              <h3>{songName}</h3>
              <p>{artistName}</p>
            </span>
          </span>
        </span>
        {/* <Link to={`/artist-profile/${artistProfileUrl}`}>Add to Exiting Playlist</Link> */}
        <a href="#">Add to Exiting Playlist</a>

        <span className="modal__action">
          <CustomButton buttonText="Add to New Playlist" type="primary" />
          <CustomButton buttonText="Cancel" type="default" onClick={onClose} />
        </span>
      </ModalBody>
    </Modal>
  );
}
