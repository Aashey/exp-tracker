import { Button, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { ImCoinDollar } from "react-icons/im";

const CustomHeader = () => {
  const { Text } = Typography;
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Finance Tracker</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `mr-5 hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/finance"
              className={({ isActive }) =>
                `mr-5 hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-black-700"
                }`
              }
            >
              Finance
            </NavLink>
            <NavLink
              to="/targets"
              className={({ isActive }) =>
                `mr-5 hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-black-700"
                }`
              }
            >
              Targets
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default CustomHeader;
