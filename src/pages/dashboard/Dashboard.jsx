import Dashboard_Center from "./Dashboard_Center";
import Dashboard_Left from "./Dashboard_Left";
import Dashboard_Top from "./Dashboard_Top";
import "./dashboard.css";
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard_page">
      <Dashboard_Left navigate={navigate} />
      <div className="dashboard_page_right">
        <Dashboard_Top />
        <div>
          <Dashboard_Center />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
