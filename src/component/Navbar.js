import { Link } from "react-router-dom";
const Navbar = () =>{

    return(

        <>
        <header className="header_section long_section px-0">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <Link className="navbar-brand" to="/">
          <span>
            <img src="/images/logo.png"/>
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Aboutus"> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Furniture">Furnitures</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="quote_btn-container">
            <Link to="">
              <span>
                Login
              </span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <form className="form-inline">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
        </>
    )

}

export default Navbar;