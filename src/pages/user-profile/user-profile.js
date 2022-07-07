import React from "react";

import { Box, useTheme } from "@mui/material";
import { UserProfileDetails } from "../../components/profile-details/user-profile-details";
import { SongSamples, userProfileInfo } from "../../data/data";
import SongBoard from "../../components/boards/song-borads";
import { AccountContext } from "../../provider/wallet.provider";
import { truncateAddress } from "../../utils/utils";

export const UserProfile = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState("collections");
  const { address } = React.useContext(AccountContext);
  const activeCarts = () => {
    switch (activeTab) {
      case "collections":
        return SongSamples;

      default:
        return SongSamples?.filter((_) => _?.status === "sold");
    }
  };

  return (
    <Box
      bgcolor={theme.palette.secondary.light}
      sx={{ borderRadius: "10px", padding: "40px 30px" }}
    >
      <UserProfileDetails
        userInfo={userProfileInfo}
        address={truncateAddress(address)}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      <SongBoard isMarginTop carts={activeCarts()} showPrice={true} />
    </Box>
  );
};
