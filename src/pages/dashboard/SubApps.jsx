import { useNavigate } from "react-router-dom";
import SubscribedCards from "./cards/SubscribedCards";

const data = [
  { id: 1, heading: "HWR", p: "Optimize growth effortlessly with personalized HWR software streamlining operations." },
  { id: 2, heading: "CMR", p: "Optimize growth effortlessly with personalized HWR software streamlining operations." },
  { id: 3, heading: "HRMS", p: "Optimize growth effortlessly with personalized HWR software streamlining operations." },
  { id: 4, heading: "MY Mytham", p: "Optimize growth effortlessly with personalized HWR software streamlining operations." },
  { id: 5, heading: "ASSET", p: "Optimize growth effortlessly with personalized HWR software streamlining operations." },
  { id: 6, heading: "TRUCK", p: "Optimize growth effortlessly with personalized HWR software streamlining operations." },
];

function SubApps() {
  const navigate = useNavigate();
  const navigateToDetailsPage = ()=>{
    navigate('/dashboard/unsubscribedapps/detailPage')
  }
  return (
    <div className="subscribed_apps">
      <h4>Subscribed Apps</h4>
      <div>
        <SubscribedCards />
      </div>
      <h3>Unsubscribed Apps</h3>
      <div className="unsubscribed_apps_crads">
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="unsubscribed_apps_crad" onClick={navigateToDetailsPage}>
            <div>
              <img src="/icons/down-arrow.svg" alt="" />
              <h2 key={item?.id}>{item?.heading}</h2>
            </div>
            <p>Optimize growth effortlessly with personalized HWR software streamlining operations.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubApps
