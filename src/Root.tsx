import { Link, NavLink, Outlet } from "react-router-dom";
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

 const Root = () => {
  return (
    <> <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        ZERO SHOP
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link active text-danger" : "nav-link";
              }}
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link active text-danger" : "nav-link";
              }}
              to="/Products"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link active text-danger" : "nav-link";
              }}
              to="/Signin"
            >
              Sign in
            </NavLink>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>

 <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
  
  
  </>
    
  )
}
export default Root