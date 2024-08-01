const SpecialBox = () => {
  return (
    <>
      <div className="specil-bx">
        <div className="container">
          <div className="get-freebx">
            <div>
              <h2> <span style={{ color: "black" }}>Get  a  FREE 2hrs consultation</span> by our experts</h2>
            </div>
            <div>
              {/* <!-- <a href="#" className="book-btn">Let's Talk</a> --> */}
              <div className="mdtop ui-btn studies-btn book-btn">
                <a href="contact-us" className="btn  btn-primary trans animated pulse abt-butn-bot">Know More<img src="/themes/viralon/images/icons/next.png" className="arrow  next-arow arrow1  animate-right-to-left" /></a>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="shapebx">
        <img src="/themes/viralon/images/shape.png" />
      </div>
    </>
  );
}

export default SpecialBox;