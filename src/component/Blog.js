import { useContext, useEffect } from "react";
import BlogContext from './context/BlogContext';

const Blog = () =>{

    const list_blog = useContext(BlogContext);
   
    return(
        <>
         <section className="blog_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Latest Blog
        </h2>
      </div> 
      <div className="row">
        {list_blog.map((data)=>(
          <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={data.blog_img} alt="" />
            </div>
            <div className="detail-box">
              <h5>
               {data.title}
              </h5>
              <p>
                {data.details}
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
        </>
    )
}

export default Blog;