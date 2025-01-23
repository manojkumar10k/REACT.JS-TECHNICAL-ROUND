import React from 'react'

function Contact() {
  return (
    <div>
         {/* <!-- inner page section --> */}
     <section className="inner_page_head">
  <div className="container_fuild">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <h3>Contact us</h3>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <!-- end inner page section --> */}


      {/* <!-- why section --> */}
     <section className="why_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="full">
          <form action="index.html">
            <fieldset>
              <input type="text" placeholder="Enter your full name" name="name" required />
              <input type="email" placeholder="Enter your email address" name="email" required />
              <input type="text" placeholder="Enter subject" name="subject" required />
              <textarea placeholder="Enter your message" required defaultValue={""} />
              <input type="submit" defaultValue="Submit" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <!-- end why section --> */}


      {/* <!-- arrival section --> */}
 <section className="arrival_section">
  <div className="container">
    <div className="box">
      <div className="arrival_bg_box">
        <img src="images/arrival-bg.png" alt />
      </div>
      <div className="row">
        <div className="col-md-6 ml-auto">
          <div className="heading_container remove_line_bt">
            <h2>
              #NewArrivals
            </h2>
          </div>
          <p style={{marginTop: 20, marginBottom: 30}}>
            Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
          </p>
          <a href>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <!-- end arrival section --> */}
    </div>
  )
}

export default Contact
