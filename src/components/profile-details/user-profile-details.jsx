import * as React from "react";
import { staticIcons, tempImages } from "../../data/data";
import { previewDynamicImage, previewStaticImage } from "../../tools";
// import { useTheme } from "@mui/material";
import { CustomButton } from "../button/button";
import { UserProfileStyled } from "./style";

export function UserProfileDetails({
  userInfo,
  setActiveTab,
  activeTab,
  address,
}) {
  // const theme = useTheme();

  return (
    <UserProfileStyled>
      <img
        className="artist-profile__main-img"
        src={previewDynamicImage(tempImages?.coverImg)}
        alt="main img"
      />
      <div className="artist-profile__profile">
        <img
          className="artist-profile__profile-img"
          src={previewDynamicImage(tempImages?.profileImg)}
          alt="profile img"
        />
        <div className="artist-profile__title">
          {userInfo?.name}
          <img
            className="artist-profile__verify-tick-icon"
            alt="verify tick"
            src={previewStaticImage(staticIcons?.quality)}
          />
        </div>
        <div className="artist-profile__account-social">
          <a
            href="#"
            className="artist-profile__ether-account artist-profile__icon"
          >
            <img
              className="artist-profile__ether-icon"
              alt="ether"
              src={previewStaticImage(staticIcons?.etherWhite)}
            />
            {address}
          </a>
          <a href="#" className="artist-profile__twitter artist-profile__icon">
            <img
              className="artist-profile__twitter"
              alt="ether"
              src={previewStaticImage(staticIcons?.twitterWhite)}
            />
          </a>
          <a
            href="#"
            className="artist-profile__instagram artist-profile__icon"
          >
            <img
              className="artist-profile__instagram"
              alt="ether"
              src={previewStaticImage(staticIcons?.instagramWhite)}
            />
          </a>
        </div>
        <div className="artist-profile__description">
          {userInfo?.description}
        </div>
        <div className="artist-profile__btns">
          <CustomButton
            buttonText="Your Collections (2)"
            startIcon={previewStaticImage(staticIcons?.wallet)}
            type={activeTab === "collections" ? "primary" : "dark"}
            onClick={() => setActiveTab("collections")}
          />

          <CustomButton
            buttonText="Favorits (25)"
            startIcon={previewStaticImage(staticIcons?.heartFull)}
            type={activeTab === "favorites" ? "primary" : "dark"}
            onClick={() => setActiveTab("favorites")}
          />
        </div>
      </div>
    </UserProfileStyled>
  );
}
