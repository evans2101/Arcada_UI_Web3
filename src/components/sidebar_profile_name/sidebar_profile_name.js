import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { previewStaticImage } from "../../tools";
import { staticIcons } from "../../data/data";
import { AccountContext } from "../../provider/wallet.provider";

const ProfileBox = styled(Box)(({ theme }) => ({
  width: "214px",
  height: "115px",
  borderRadius: "15px",
  margin: "10px auto",
  display: "flex",
  padding: "10px 8px",
  "& > span": {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: theme.palette.colors.lightPink,
    marginRight: "10px",
  },
  "& .profile-img": {
    display: "inline-block",
    marginRight: "10px",
  },
  "& .name_box": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  "& .name": {
    fontSize: "18px",
    color: "#fff",
    lineHeight: "25px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    "& img": {
      marginLeft: "10px",
    },
  },
  "& .link": {
    fontWeight: 500,
    fontSize: "14px",
    textDecorationLine: "underline",
    color: "#D080F3",
  },
}));

const SidebarProfileName = () => {
  const { address } = React.useContext(AccountContext);

  return !address ? null : (
    <ProfileBox>
      <span></span>
      <div className="name_box">
        <div className="name">
          Joun Doe
          <img
            src={previewStaticImage(staticIcons?.quality)}
            width="20px"
            height="20px"
            alt=""
          />
        </div>
        <Link to={`/user/${address}`} className="link">
          View Profile
        </Link>
      </div>
    </ProfileBox>
  );
};

export default SidebarProfileName;
