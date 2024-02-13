import { Link } from "react-router-dom";

const footer = () => {
    return(
        <>
            
  
  <section className="info_section long_section">

    <div className="container">
      <div className="contact_nav">
        <Link to="">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>
            Call : +1 4379887315
          </span>
        </Link>
        <Link to="">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>
            Email : rahullad17@gmail.com
          </span>
        </Link>
      </div>

      <div className="info_top ">
        <div className="row ">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="info_links">
              <h4>
                QUICK LINKS
              </h4>
              <div className="info_links_menu">
                <Link className="" to="/">Home <span className="sr-only">(current)</span></Link>
                <Link className="" to="/Aboutus"> About</Link>
                <Link className="" to="/Furniture">Furniture</Link>
                <Link className="" to="/Blog">Blog</Link>
                <Link className="" to="/Contactus">Contact Us</Link>
              </div>
            </div>
          </div>
       
          <div className="col-md-4">
            <div className="info_form">
              <h4>
                SIGN UP TO OUR NEWSLETTER
              </h4>
              <form action="">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <Link to="https://rahul7315.github.io/Portfolio/">Free Html Templates</Link>
      </p>
    </div>
  </footer>

        </>
    );
}

export default footer;