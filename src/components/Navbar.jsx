import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import { Instagram, Home, Badge, Telegram, NotificationAdd } from "@mui/icons-material/";
import '../assets/pexels-alin-luna-10320674.jpg';
import { useState } from "react";
// import theme from "../theme";

function Navbar() {
  const [open,setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")((theme) => ({
    background: "white",
    padding: "0 10px",
    borderRadius: "5px",
    Width: "50%",
  }));
  const Icons = styled(Box)((theme) => ({
    display:'flex',
    alignItems:'center',
    gap:'20px,'
  }));
  return (
    <Box>
      <AppBar position="sticky" sx={{background:'white'}}>
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } , color:'black'}}
          >
            InstaGram
          </Typography>
          <Instagram sx={{ display: { xs: "block", sm: "none" }, background:'black' }} />
          <Search>
            <InputBase placeholder="search here " />
          </Search>
          <Icons>
            <Badge  >
              <Home bgcolor='black' />
            </Badge>
            <Badge >
              <Telegram />
            </Badge>
            <Badge >
              <NotificationAdd />
            </Badge>

            <Avatar onClick={()=>setOpen(true)} sx={{width:'30',height:'30'}} src={require("../assets/pexels-alin-luna-10320674.jpg")} />
          </Icons>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </Box>
  );
}

export default Navbar;
