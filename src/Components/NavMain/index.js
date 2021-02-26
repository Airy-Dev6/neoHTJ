import { Link } from "react-router-dom";
import { Col, NavbarBrand } from "reactstrap";
import './style.css'


export default function NavMain() {
  return (
    <Col xs="3" sm="none" className="p-0">
      <div className="bg-dark w-100 pl-2 text-white NavMain" >
        <NavbarBrand className="text-white " href="/">Neo</NavbarBrand>
        <ul className="navbar-nav pt-3">
          <li className="nav-item ">
             <Link className="nav-link " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/schools">Schools</Link>
            <ul className="">
              <li className="nav-item">
               <Link className="nav-link " to="/create-school">Register new school</Link>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </Col>
  )
}
