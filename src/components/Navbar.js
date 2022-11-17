import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Badge,
  Box,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{backgroundColor:"#356657"}}>
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          The Champ
        </Typography>
        <EmojiEventsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            onClick={(e) => setOpen(true)}
          />
        </IconContainer>
        <UserContainer onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Typography variant="span">The Champ</Typography>
        </UserContainer>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;