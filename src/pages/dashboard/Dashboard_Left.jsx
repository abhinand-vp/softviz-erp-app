/* eslint-disable react/prop-types */

import { useState } from "react";

function Dashboard_Left() {
  const [activeNavItem, setActiveNavItem] = useState("");
  const [dashboardOneVisible, setDashboardOneVisible] = useState(false);
  const [dashboardTwoVisible, setDashboardTwoVisible] = useState(false);
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    if (navItem === "Dashboard") {
      setDashboardOneVisible(!dashboardOneVisible);
    } else if (navItem === "Portal Management") {
      setDashboardTwoVisible(!dashboardTwoVisible);
    }
  };
  return (
    <>
      <div className="dashboard_page_left">
        <div className="dashboard_page_left_profile">
          <div className="avatar_circle">
            <img src="/image/avatar-41.png" alt="" />
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
                  ? "active nav_item_li"
                  : "nav_item_li"
              }
              onClick={() => handleNavItemClick("Dashboard")}
            >
              <div className="nav_item_li_div">
                <img src="/icons/dashboard_icon.svg" alt="" />
                Dashboard
              </div>
            </li>
            <div
              className={`dashboard_dropdown ${
                dashboardOneVisible ? "show" : "hide"
              }`}
            >
              {dashboardOneVisible && (
                <ul className="dashboard_dropdown_ul">
                  <li>Subscribed Apps</li>
                </ul>
              )}
            </div>
            <li
              className={
                activeNavItem === "Portal Management"
                  ? "active nav_item_li"
                  : "nav_item_li"
              }
              onClick={() => handleNavItemClick("Portal Management")}
            >
              <div className="nav_item_li_div">
                <img src="/icons/portal_icon.svg" alt="" />
                Portal Management
              </div>
            </li>
            <div
              className={`dashboard_dropdown ${
                dashboardTwoVisible ? "show" : "hide"
              }`}
            >
              {dashboardTwoVisible && (
                <ul className="dashboard_dropdown_ul">
                  <li>
                    <div className="nav_item_li_div">
                      <img src="/icons/earth_icon.svg" alt="" />
                      Country
                    </div>
                  </li>
                  <li>
                    <div className="nav_item_li_div">
                      <img src="/icons/worldmap_icon.svg" alt="" />
                      State
                    </div>
                  </li>
                  <li>
                    <div className="nav_item_li_div">
                      <img src="/icons/region_icon.svg" alt="" />
                      Region
                    </div>
                  </li>
                  <li>
                    <div className="nav_item_li_div">
                      <img src="/icons/currency_icon.svg" alt="" />
                      Currency
                    </div>
                  </li>
                  <li>
                    <div className="nav_item_li_div">
                      <img src="/icons/exchange_icon.svg" alt="" />
                      Exchange Rate
                    </div>
                  </li>
                  <li>
                    <div className="nav_item_li_div">
                      <img src="/icons/city_icon.svg" alt="" />
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
                <img src="/icons/settings_icon.svg" alt="" />
                User Settings
              </div>
            </li>
          </ul>
        </div>
        <div className="logout_div">
          
        <img src="/icons/logout_icon.svg" alt="" />
          Logout</div>
      </div>
    </>
  );
}

export default Dashboard_Left;
