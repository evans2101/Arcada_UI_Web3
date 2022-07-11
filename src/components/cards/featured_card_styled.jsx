import { styled } from "@mui/material/styles";
export const FeturedCardStyled = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(213.41deg, rgba(255, 116, 73, 0.5) 0%, rgba(171, 69, 231, 0.5) 100%)",
  padding: "3px",
  maxWidth: "400px",
  minWidth: "320px",
  position: "relative",
  borderRadius: "18.022px",
  transition: "all 0.4s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
    zIndex: 10,
  },
  "& .add-icon": {
    position: "absolute",
    background: "#FFFFFF",
    borderRadius: "12px",
    top: "24px",
    right: "24px",
    padding: "0px",
    cursor: "pointer",
    width: "42px",
    height: "42px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .inner-card": {
    background: "linear-gradient(220.47deg, #181818 -20.14%, #181818 30.92%)",
    padding: "12px",
    borderRadius: "18.022px"
  },
  "&  .card__profile": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    "&  a": {
      color: "white",
    },
  },
  "& .card__profile-left": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  "& .card__profile-right": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "6px",
    "& > img": {
      width: 20,
    },
    "& span": {
      color: theme.palette.primary.light,
    },
  },
  "& .card__profile-section": {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    "& p": {
      fontSize: "14px",
      marginTop: "10px",
      fontWeight: "normal",
      color: "#a3a3a3",
    },
    "& h5": {
      fontSize: "18px",
    },
  },
  "& .card__profile-main-img": {
    width: "160px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  "& .card__profile-btns": {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "25px",
    "& *": {
      flex: 1,
    },
  },
  "& .card__profile-btn": {
    backgroundColor: "#AB45E7",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    alignItems: "center",
    padding: "18px 16px",
    borderRadius: "8px",
  },
  "& .card__profile-btn-view-video": {
    width: "80%",
    cursor: "pointer",
  },
  "& .card__profile-btn-play": {
    width: "20%",
    cursor: "pointer",
  },
  "& .card__price": {
    "&  p , h3 , h4": {
      color: "white",
      margin: 0,
    },
    "& p": {
      fontSize: 14,
    },
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    "& > span": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-end",
      "& > span": {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        "& > img": {
          marginRight: 5,
        },
        "& > h4": {
          fontSize: 12,
          fontWeight: 500,
        },
      },
    },
  },
}));