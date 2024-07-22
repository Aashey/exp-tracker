import CustomHeader from "../common/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
    </>
  );
};

export default Layout;
