import DashboardView from "./components/Dashboardview";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminApp() {
  return (
    <div className="flex">
      <div className="basis-[15%] border">
        <Sidebar/>
      </div>
      <div className="basis-[85%] border">
        <DashboardView/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}