import React from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import "../assets/pexels-alin-luna-10320674.jpg";
import '../assets/1.jpg';
import '../assets/2.jpg';
import '../assets/3.jpg';

function Rightbar() {
  return (
    <Box flex={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant="h6" textAlign={'center'}>Online Friends</Typography>
        <AvatarGroup max={4} sx={{display:'flex',alignItems:'center'}}>
          <Avatar alt="Remy Sharp" src='' />
          <Avatar alt="Travis Howard" src='' />
          <Avatar alt="Cindy Baker" src=''/>
          <Avatar alt="Agnes Walker" src='' />
        </AvatarGroup>
        <Typography variant="h6">latest photos</Typography>
        <ImageList cols={3} rowHeight={150}>
          <ImageListItem>
            <img alt="" src={require("../assets/1.jpg")} />
          </ImageListItem>
          <ImageListItem>
            <img alt="" src={require("../assets/2.jpg")} />
          </ImageListItem>
          <ImageListItem>
            <img alt="" src={require("../assets/3.jpg")} />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" mt={'10px'}  textAlign={'center'}>Messages</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
