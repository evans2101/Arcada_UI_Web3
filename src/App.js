import React from "react";
import AppRoutes from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index";
import { WalletProvider } from "./provider/wallet.provider";

import { PlayerContextProvider } from "./context/playerContext";
import AudioPlayer from "./components/audio-player";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PlayerContextProvider>
        <WalletProvider>
          <AppRoutes />
        </WalletProvider>
        <AudioPlayer />
      </PlayerContextProvider>
    </ThemeProvider>
  );
};

export default App;
