import { styled } from "@mui/material/styles";

export const BackDrop = styled("div")(({ theme }) => ({
  zIndex: 100000,
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  background: "#00000050",
  backdropFilter: "blur(5px)",
}));
export const VideoPlayerLayout = styled("div")(({ theme, onfly }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 10,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& .react_player": {
    width: "100% !important",
    borderRadius: 10,
    "& > video": {
      backgroundColor: theme.palette.backgroundColors.dark,
      borderRadius: 10,
    },
    "& .react-player__preview": {
      borderRadius: 10,

      "& .react-player__shadow": {
        "& .react-player__play-icon": {
          display: "none",
        },
      },
    },
  },

  "& .video_overlay": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,

    "& > img.play_cover_image": {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      width: "100%",
      height: "-webkit-fill-available",
      objectFit: "cover",
      borderRadius: 10,
    },

    "& > img.play_icon": {
      width: 70,
      height: 70,
      objectFit: "contain",
      zIndex: 10,
      cursor: "pointer",
      opacity: 0.7,
    },

    "& > span.play_controller": {
      zIndex: 10,
      position: "absolute",
      borderRadius: "0px 0px 10px 10px",
      height: 50,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: theme.palette.backgroundColors.playerControl,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& > span.main_controls": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        "& > span.control_icon": {
          "& > img": {
            width: 20,
            userSelect: "none",
          },
          margin: "0px 10px 0px 10px",
          cursor: "pointer",
        },
        "& > span.control_icon_pause": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 6,
          width: 40,
          backgroundColor: theme.palette.primary.lighter,
          boxShadow: "0px 4.2119px 9.47677px rgba(171, 69, 231, 0.35)",
          cursor: "pointer",

          "& > img": {
            width: 10,
            userSelect: "none",
          },
        },
      },
      "& > span.volume_controls": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 100,
        maxWidth: 200,

        "& > img": {
          width: 20,
          userSelect: "none",
          marginRight: 10,
        },
      },
      "& > span.control_btns": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",

        "& > img": {
          width: 20,
          userSelect: "none",
        },
      },

      "& > span.timeline_controls": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 100,
        maxWidth: 500,
        flex: 2,
        "& > span": {
          marginRight: 10,
          marginLeft: 10,
        },
        "& > p": {
          margin: 0,
          fontSize: 12,
          color: theme.palette.textColors.whiteFade,
          minWidth: 33,
          maxWidth: 33,
        },
      },
    },
    "& > span.hide_controls": {
      // opacity: 0,
      display: "none",
    },
    "& > span.view_counter": {
      zIndex: 9,
      borderRadius: 10,
      position: "absolute",
      bottom: 10,
      left: 10,
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px 10px",
      border: `2px solid ${theme.palette.colors.lightPink}`,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      "& > p": {
        color: theme.palette.colors.lightPink,
        margin: 0,
      },
    },
    "& > span.view_fullscreen": {
      cursor: "pointer",
      zIndex: 9,
      borderRadius: 10,
      position: "absolute",
      bottom: 10,
      right: 10,
      width: 40,
      height: 40,
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px 10px",
      border: `2px solid ${theme.palette.colors.lightPink}`,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

      "& > img": {
        width: 20,
        height: 20,
        filter:
          "invert(49%) sepia(53%) saturate(6570%) hue-rotate(258deg) brightness(98%) contrast(91%)",
      },
    },
    "&  .hide_image": {
      display: "none !important",
    },
  },
}));
