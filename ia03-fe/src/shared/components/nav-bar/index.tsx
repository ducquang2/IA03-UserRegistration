import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          IA03 - User RegisterForm
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/login">SignIn</Link></li>
          <li><Link to="/register">Register</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;