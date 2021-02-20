import { Link } from "react-router-dom";
import { Col, NavbarBrand } from "reactstrap";


export default function NavMain() {
  return (
    <Col xs="3" className="p-0">
      <div className="bg-dark w-100 pl-2 text-white NavMain" >
        <NavbarBrand className="text-white" href="/">Neo</NavbarBrand>
        <ul className="navbar-nav pt-3">
          <li className="nav-item ">
             <Link className="nav-link " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">Home</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to="/">Home</Link>
          </li>
        </ul>
      </div>
    </Col>
  )
}
