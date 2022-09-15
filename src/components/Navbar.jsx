import {  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar className="color-menu d-flex justify-content-between align-items-center flex-row-reverse">
        <Link to="#" className="text-white me-4 text-decoration-none">
          HAPPY-CAKE 🍰
        </Link>
        <div>
          <Link to="/" className="text-white ms-4 text-decoration-none ">
            Home 🏠
          </Link>
          <Link
            to="/contacto"
            className=" text-white ms-4 text-decoration-none "
          >
            Contacto 📒
          </Link>
        </div>
      </Navbar>
    </>
  );
}
