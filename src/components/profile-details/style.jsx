import { styled } from "@mui/material/styles";

export const UserProfileStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",

  "& .artist-profile__main-img": {
    width: "100%",
    height: "225px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  "& .artist-profile__profile": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "-80px",
  },

  "& .artist-profile__title": {
    fontSize: "24px",
  },

  "& .artist-profile__description": {
    fontSize: "13px",
    fontWeight: "normal",
    opacity: "0.8",
    width: "70%",
    lineHeight: "normal",
    textAlign: "center",
  },

  "& .artist-profile__title, & .artist-profile__account-social, & .artist-profile__btns":
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    },

  "& .artist-profile__icon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    backgroundColor: "black",
    padding: "12px",
    borderRadius: "4px",
    color: "#fff",
  },

  "& .artist-profile__ether-account": {
    backgroundColor: "#331545",
  },
  "& .artist-profile__twitter": {
    backgroundColor: "#005677",
  },
  "& .artist-profile__instagram": {
    backgroundColor: "#49171A",
  },

  "& .artist-profile__btns": {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  "& .artist-profile__btn": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    alignItems: "center",
    padding: "18px 16px",
    borderRadius: "10px",
    lineHeight: "normal",
  },
  "& .artist-profile__btn--active": {
    backgroundColor: theme.palette.primary.main,
  },
}));
