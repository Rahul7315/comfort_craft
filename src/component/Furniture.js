import { React, useContext } from "react";
import ItemContext from "./context/ItemContext";


const Furniture = () =>{
  
  const f_item = useContext(ItemContext);

  return (
    <>
      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Furniture</h2>
            <p>
              which don't look even slightly believable. If you are going to
              use a passage of Lorem Ipsum, you need to be sure there isn't an
            </p>
          </div>
          <div className="row">
            {f_item.map((data)=>(
                 <div key={data.id} className="col-md-6 col-lg-4">
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
                         <span>$</span> {data.item_price}.00
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
    </>
  );
};

export default Furniture;