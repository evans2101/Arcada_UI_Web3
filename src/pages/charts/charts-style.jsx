import { styled } from "@mui/material/styles";

export const BoxLayout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 10,
  padding: "40px 30px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  "& h2.box__title": {
    fontSize: "20px",
    fontWeight: "800",
    alignSelf: "flex-start",
  },

  "& .box__action_btns": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const ChartTable = styled("div")(({ theme }) => ({
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
    fontSize: 14,
  },

  "& .chart_table__header": {
    height: 40,
    padding: "5px 10px 5px 10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.colors.black,
    borderRadius: 10,
    margin: "5px 0px 5px 0px",
    "& > *": {
      flex: 1,
    },
    "& > *:nth-of-type(1)": {
      flex: 0.2,
    },
  },
  "& .chart_table__rows": {
    "& > *": {
      flex: 1,
    },
    "& > p:nth-of-type(1)": {
      flex: 0.2,
    },
    height: 80,
    padding: "5px 10px 5px 10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2D2C31",
    borderRadius: 10,
    margin: "5px 0px 5px 0px",

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
      },
    },
  },
}));
