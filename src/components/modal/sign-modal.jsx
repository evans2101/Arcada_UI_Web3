import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      {...other}
      style={{ textAlign: "center", fontWeight: "bold" }}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function SignModal({
  isOpen,
  setIsOpen,
  signMessage,
  disconnect,
}) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Sign message
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography
            gutterBottom
            style={{ padding: "1rem 2rem", width: "100%" }}
          >
            To verify your account and sign in, please sign the message in your
            wallet
          </Typography>
          <Button
            onClick={signMessage}
            style={{
              width: "100%",
              color: "gray",
              padding: "1.5rem",
              backgroundColor: "#effaf7",
              borderRadius: "1.5rem",
            }}
          >
            Verify Account
          </Button>
          <Button
            onClick={disconnect}
            style={{ width: "100%", color: "gray", padding: "1.5rem" }}
          >
            Disconnect
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
