import { styled } from "@mui/material/styles";

export const VideoPageLayout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 10,
  padding: "40px 30px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  "& .video__box": {
    backgroundColor: theme.palette.colors.black,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  "& .video__action_box": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 0,
    "& > span": {
      height: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      "& > p": {
        color: theme.palette.textColors.whiteFade,
        margin: 0,
      },
    },
    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between",
      "& > span": {
        marginLeft: 5,
        // marginRight: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "auto",
        borderRadius: 10,
        background: "rgba(171, 69, 231, 0.25)",
        padding: "5px 10px",

        "& > img": {
          borderRadius: 5,
          width: 28,
          height: 28,
          marginRight: 10,
        },

        "& > span": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
          "& > p": {
            color: "white",
            fontSize: 10,
            margin: 0,
          },
        },
      },
    },
  },
  "& .video__about_box": {
    marginTop: 10,
    backgroundColor: "#181818",
    borderRadius: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",

    padding: 20,
    "& h3": {
      color: "#ffffff80",
      marginBottom: 10,
      fontSize: 20,
      fontWeight: 800,
    },
    "& > p": {
      color: "white",
      margin: 0,
      fontWeight: 500,
      fontSize: 14,
      opacity: 0.8,
      lineHeight: "25px",
    },
  },

  "& .video__info_box": {
    marginTop: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 0,

    "&  p , h2": {
      color: "white",
    },
    "& > div": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",

      "& > span": {
        width: "100%",
        padding: 10,
        backgroundColor: "#181818",
        borderRadius: 10,
      },
    },
    "& > div:nth-of-type(1)": {
      marginRight: 5,
      "& > span:nth-of-type(1)": {
        marginBottom: 5,
        "& > span ": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          "& > img ": {
            width: 15,
            marginRight: 10,
            objectFit: "cover",
          },
        },
      },
      "& > span:nth-of-type(2)": {
        marginTop: 5,
      },
      "& > span ": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    "& > div:nth-of-type(2)": {
      marginLeft: 5,
      "& > span ": {
        padding: 20,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        "& > div": {
          backgroundColor: "#3a3a3a",
          height: 20,
          alignSelf: "stretch",
          margin: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          borderRadius: 2,
          "& > span": {
            margin: 5,
            background:
              "linear-gradient(-90deg, #AB45E7 -2.06%, #FF7449 100%);",
            borderRadius: 2,
            height: 12,
            width: "60%",
          },
        },
        "& > h2": {
          fontSize: 36,
          fontWeight: 800,
        },
        "& > p": {
          fontSize: 20,
          fontWeight: 700,
          color: "#ffffff",
        },
        "& > span": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",

          "& > button": {
            width: "100%",
          },
        },
      },
    },

    "& h2": {
      // color: '#ffffff80',
      marginBottom: 10,
      fontSize: 20,
      fontWeight: 800,
      margin: 0,
    },
    "&  p": {
      margin: 0,
      color: "#ffffff80",
      lineHeight: "30px",
      fontSize: 14,
      fontWeight: 500,
    },
  },

  "& .video__history_box": {
    borderRadius: 10,
    marginTop: 0,
    backgroundColor: "#181818",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 10,
    "& h3": {
      color: "#ffffff80",
      margin: 10,
      fontSize: 20,
      fontWeight: 800,
    },
  },
}));

export const HistoryTable = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  margin: "5px 0px 5px 0px",
  "& p": {
    color: "#fff",
    margin: 0,
    textAlign: "left",
    fontSize: 15,
  },

  "& .history_table__header": {
    height: 40,
    padding: "5px 10px 5px 10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3a3a3a",
    borderRadius: 10,
    margin: "5px 0px 5px 0px",
    "& > *": {
      flex: 1,
    },
    "& > *:nth-of-type(2)": {
      flex: 0.6,
    },
    "& p": {
      fontWeight: 800,

      fontSize: 14,
    },
  },
  "& .history_table__rows": {
    "& > *": {
      flex: 1,
    },
    "& > p:nth-of-type(2)": {
      flex: 0.6,
    },
    "& p": {
      fontWeight: 600,

      fontSize: 15,
    },
    padding: "5px 10px 5px 10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ffffff30",
    ":last-child": {
      borderBottom: 0,
    },

    "& .row_info": {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "flex-start",
      "& > img": {
        width: 40,
        height: 40,
        objectFit: "cover",
        borderRadius: 10,
        marginRight: 5,
      },
      "& > span": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        "& > p:last-child": {
          color: theme.palette.textColors.whiteFade,
          fontSize: 12,
        },
      },
    },
    "& .double__deck": {
      height: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around",
      "& > p:last-child": {
        color: theme.palette.textColors.whiteFade,
        fontSize: 12,
        fontWeight: 400,
      },
    },
  },
}));
