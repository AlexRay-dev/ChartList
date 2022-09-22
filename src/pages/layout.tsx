import React, {FC} from 'react';
import Header from "../components/header";
import {CssBaseline} from "@mui/material";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Layout;