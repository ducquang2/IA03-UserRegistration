import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="h-dvh">
      <div className="h-12 bg-green-50 flex items-center justify-between px-4">
        <h3 className="font-medium">
          <Link to="/">IA03 - User RegisterForm</Link>
        </h3>

        <nav className="flex items-center gap-4 h-full text-lg font-semibold justify-end px-4">
          <Link to="/login">SignIn</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default RootLayout;