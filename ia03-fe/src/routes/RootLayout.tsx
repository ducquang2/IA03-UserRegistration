import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../shared/components/nav-bar";

function RootLayout() {
  return (
    <div className="h-dvh">
      <Navbar />
      <Outlet />
      <ToastContainer
        toastClassName="has-corners"
        position="top-right"
      />
    </div>
  )
}

export default RootLayout;