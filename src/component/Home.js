
import { Link } from "react-router-dom";
import sideImg1 from "../slider-img.png";
import { useContext } from "react";
import ItemContext from "./context/ItemContext";
import BlogContext from "./context/BlogContext";
import Footer from "./Footer";
const Home = () =>{

    const list_item = useContext(ItemContext);
    const sort_item = list_item.splice(-3);
    const list_blog = useContext(BlogContext);
    const sort_blog= list_blog.splice(-3);
    console.log(sort_blog);
    return(
    <div className="hero_area">
    <section className="slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                      For All Your <br/>
                      Furniture Needs
                    </h1>
                    <p>
                    Transform your living space with our exquisite furniture collection, blending style and comfort seamlessly for a home that reflects your unique taste.</p>
                    <div className="btn-box">
                      <Link to="/Contactus" className="btn1">
                        Contact Us
                      </Link>
                      <Link to="/Aboutus" className="btn2">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src={sideImg1} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="furniture_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          New Inventory
        </h2>
        <p>
        Elevate your living space with our curated furniture sale, where style meets affordability for a home that embodies comfort and sophistication </p>
      </div>
      <div className="row">
        {sort_item.map((data)=>(
          
       
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src={data.item_img} alt="" />
            </div>
            <div className="detail-box">
              <h5>
              {data.item_name}
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span>{data.item_price}.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
         ))}
      </div>
    </div>
  </section>

    <section className="blog_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Latest Blog
        </h2>
      </div>
      <div className="row">
      {sort_blog.map((blog_data)=>(
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={blog_data.blog_img} alt="" />
            </div>
            <div className="detail-box">
              <h5>
                {blog_data.title}
              </h5>
              <p>
              {blog_data.details} 
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  </section>
  <Footer/>
        </div>

        
    );
}

export default Home;