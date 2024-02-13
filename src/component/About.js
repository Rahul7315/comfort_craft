const About = () =>{
    return(
        <>
  <section className="about_section layout_padding long_section">
    <div className="container" >
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/about-img.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
            Our journey began with a simple idea - to curate a collection of furniture that combines style, comfort, and functionality. Over the years, we've grown into a destination for those seeking quality pieces that not only reflect their personal taste but also stand the test of time.  </p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
}
export default About;