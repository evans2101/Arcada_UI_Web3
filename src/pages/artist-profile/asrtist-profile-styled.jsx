import { styled } from "@mui/material/styles";

export const ArtistProfileStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",

  "& .artist_profile__header": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    backgroundColor: "#2d2c31",
    paddingBottom: 20,
    "& .artist_profile__header_cover_img": {
      width: "100%",
      flex: 0.7,
      objectFit: "cover",
      borderRadius: "20px 20px 0px 0px",
    },

    "& > span": {
      "& p": {
        color: "#fff",
      },
      "& > img": {
        width: 150,
        height: 150,
        marginRight: 18,
        objectFit: "cover",
        borderRadius: "20px",
      },
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      marginTop: -40,
      marginLeft: 40,
      "& > span": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        "& > span": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          "& > img": {
            marginLeft: 10,
          },
        },

        "& > p": {
          marginTop: 10,
        },
      },
    },
  },

  "& .artist_profile__body": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: "20px",

    "& .artist_profile__portfolio": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundColor: "#181818",
      borderRadius: 10,
      padding: 15,
      marginRight: 10,
      "& h3": {
        color: "#ffffff80",
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 800,
      },
      // flex: 0.7,
    },

    "& .artist_profile__info": {
      width: "100%",
      maxWidth: 350,
      // flex: 0.3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      marginLeft: 10,
      "& .artist_profile__bio": {
        backgroundColor: "#181818",
        borderRadius: 10,
        padding: 15,
        "& h3": {
          color: "#ffffff80",
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 800,
        },
        "& p": {
          color: "#fff",
          lineHeight: "30px",
        },
      },
      "& .artist_profile__social": {
        marginTop: 10,
        backgroundColor: "#181818",
        borderRadius: 10,
        padding: 15,
        width: "100%",
        "& h3": {
          color: "#ffffff80",
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 800,
        },
        "& p": {
          color: "#fff",
          lineHeight: "30px",
        },
        "& > span": {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          "& > button": {
            width: "100%",
          },
        },
      },
    },
  },
}));
