import Country from "./Country";
import State from "./State";
import SubApps from "./SubApps"
import { Routes, Route } from "react-router-dom";

function Dashboard_Center() {
  return (
    <>
      <div className="dashboard_center">
        <Routes>
          <Route path="subscribedapps" element={<SubApps />} />
          <Route path="country" element={<Country />} />
          <Route path="state" element={<State />} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard_Center
