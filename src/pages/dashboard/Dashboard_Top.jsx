/* eslint-disable react/prop-types */


function Dashboard_Top({ toogleNav }) {
  return (
    <>
      <div className="dashboard_page_right_top">
        <div className="nav_icon">
          <img src="/icons/nav_icon.svg" alt="" onClick={toogleNav} />
          <h3>Dashboard</h3>
        </div>
        <div className="dashboard_top_icons">
          <img src="/icons/halfmoon_icon.svg" alt="" />
          <img src="/icons/language_icon.svg" alt="" />
          <img src="/icons/cart_icon.svg" alt="" />
        </div>
        <div className="search_box_mobile">
          <input type="Search" className="search_icon" name="" id="" />
        </div>
      </div>
    </>
  );
}

export default Dashboard_Top;
