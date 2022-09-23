import React, {FC} from 'react';
import {AppBar, Container, styled, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

const StyledHeaderLink = styled(Link)(() => ({
  color: "white",
  textDecoration: "none",
  "&:not(:last-child)": {marginRight: "25px"},
  "&:hover": {textDecoration: 'underline'}
}))

const Header: FC = () => {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Container >
          <StyledHeaderLink to="/">View mode</StyledHeaderLink>
          <StyledHeaderLink to="/settings">Settings</StyledHeaderLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


