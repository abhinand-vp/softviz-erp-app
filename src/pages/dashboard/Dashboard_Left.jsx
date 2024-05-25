/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard_Left({ isNavOpen, handleNavClose }) {
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("");
  const [activeDropdownItem, setActiveDropdownItem] = useState("");
  const [dashboardOneVisible, setDashboardOneVisible] = useState(false);
  const [dashboardTwoVisible, setDashboardTwoVisible] = useState(false);

  const handleNavItemClick = (navItem) => {
    if (activeNavItem === navItem) {
      setActiveNavItem("");
      setDashboardOneVisible(false);
      setDashboardTwoVisible(false);
    } else {
      setActiveNavItem(navItem);
      if (navItem === "Dashboard") {
        setDashboardOneVisible(!dashboardOneVisible);
        setDashboardTwoVisible(false);
      } else if (navItem === "Portal Management") {
        setDashboardTwoVisible(!dashboardTwoVisible);
        setDashboardOneVisible(false);
      } else {
        setDashboardOneVisible(false);
        setDashboardTwoVisible(false);
      }
    }
  };

  const handleDropdownItemClick = (dropdownItem, path) => {
    setActiveDropdownItem(dropdownItem);
    navigate(path);
    handleNavClose()
  };

  return (
    <>
      <div
        className={
          isNavOpen ? "dashboard_page_left show" : "dashboard_page_left hide"
        }
      >
        <button className="close_nav_icon" onClick={handleNavClose}>close</button>
        <div className="dashboard_page_left_profile">
          <div className="avatar_circle">
            <img src="/image/avatar-41.png" alt="avatar" />
          </div>
          <h3>Vinesh Raj</h3>
          <p>vinesh@alphatechind.com</p>
          <button>View Profile</button>
        </div>

        <div className="nav">
          <ul className="nav_item">
            <li
              className={
                activeNavItem === "Dashboard"
                  ? "active nav_item_li dropdown_one_li"
                  : "nav_item_li"
              }
              onClick={() => handleNavItemClick("Dashboard")}
            >
              <div className="nav_item_li_div">
                <img src="/icons/dashboard_icon.svg" alt="dashboard_icon" />
                Dashboard <span className="dropdown_one_arrow"></span>
              </div>
            </li>
            <div
              className={`dashboard_dropdown_one dashboard_dropdown ${
                dashboardOneVisible ? "show" : "hide"
              }`}
            >
              {dashboardOneVisible && (
                <ul className="dashboard_dropdown_ul">
                  <li
                    className={
                      activeDropdownItem === "Subscribed Apps"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick(
                        "Subscribed Apps",
                        "/dashboard/subscribedapps"
                      )
                    }
                  >
                    Subscribed Apps
                  </li>
                </ul>
              )}
            </div>
            <li
              className={
                activeNavItem === "Portal Management"
                  ? "active nav_item_li dropdown_two_li"
                  : "nav_item_li"
              }
              onClick={() => handleNavItemClick("Portal Management")}
            >
              <div className="nav_item_li_div">
                <img src="/icons/portal_icon.svg" alt="portal_icon" />
                Portal Management <span className="dropdown_two_arrow"></span>
              </div>
            </li>
            <div
              className={`dashboard_dropdown_two dashboard_dropdown ${
                dashboardTwoVisible ? "show" : "hide"
              }`}
            >
              {dashboardTwoVisible && (
                <ul className="dashboard_dropdown_ul">
                  <li
                    className={
                      activeDropdownItem === "Country"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick("Country", "/dashboard/country")
                    }
                  >
                    <div className="nav_item_li_div">
                      <img src="/icons/earth_icon.svg" alt="earth_icon" />
                      Country
                    </div>
                  </li>
                  <li
                    className={
                      activeDropdownItem === "State"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick("State", "/dashboard/state")
                    }
                  >
                    <div className="nav_item_li_div">
                      <img src="/icons/worldmap_icon.svg" alt="worldmap_icon" />
                      State
                    </div>
                  </li>
                  <li
                    className={
                      activeDropdownItem === "Region"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick("Region", "/dashboard/region")
                    }
                  >
                    <div className="nav_item_li_div">
                      <img src="/icons/region_icon.svg" alt="region_icon" />
                      Region
                    </div>
                  </li>
                  <li
                    className={
                      activeDropdownItem === "Currency"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick("Currency", "/dashboard/currency")
                    }
                  >
                    <div className="nav_item_li_div">
                      <img src="/icons/currency_icon.svg" alt="currency_icon" />
                      Currency
                    </div>
                  </li>
                  <li
                    className={
                      activeDropdownItem === "Exchange Rate"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick(
                        "Exchange Rate",
                        "/dashboard/exchange-rate"
                      )
                    }
                  >
                    <div className="nav_item_li_div">
                      <img src="/icons/exchange_icon.svg" alt="exchange_icon" />
                      Exchange Rate
                    </div>
                  </li>
                  <li
                    className={
                      activeDropdownItem === "City"
                        ? "active_dropdown_item"
                        : ""
                    }
                    onClick={() =>
                      handleDropdownItemClick("City", "/dashboard/city")
                    }
                  >
                    <div className="nav_item_li_div">
                      <img src="/icons/city_icon.svg" alt="city_icon" />
                      City
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <li
              className={
                activeNavItem === "User Settings"
                  ? "active nav_item_li"
                  : "nav_item_li"
              }
              onClick={() => handleNavItemClick("User Settings")}
            >
              <div className="nav_item_li_div">
                <img src="/icons/settings_icon.svg" alt="settings_icon" />
                User Settings
              </div>
            </li>
          </ul>
        </div>
        <div className="logout_div" onClick={() => navigate("/")}>
          <img src="/icons/logout_icon.svg" alt="logout_icon" />
          Logout
        </div>
      </div>
    </>
  );
}

export default Dashboard_Left;
