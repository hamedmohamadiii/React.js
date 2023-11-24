function Service() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6   d-none d-lg-inline ">
              <img
                className="mt-5"
                src={process.env.PUBLIC_URL + "/Group 9240.png"}
                style={{ height: "580px" }}
                alt=""
              />
            </div>

            <div className="col-lg-6  col-sm-12 ">
                <div className="text-center ms-lg-5">
              <h1 id="service" className="" style={{ marginTop: 60 }}>
                ما بهترین خدمات را ارائه می دهیم
              </h1>
              <p className="pt-4" style={{fontSize:13}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
              </div>
           
           <div className="shadow-sm bg-white  rounded-2 mt-4  ms-md-5 mx-sm-5"  >
            <div className="row">
                <div className="col-2 text-center ">
                <img
                className=" pe-3"
                src={process.env.PUBLIC_URL + "/Group 9241.png"}
                style={{ height: "60px",marginTop:20 }}
                alt=""
              />
                </div>
                <div className="col-10">
                  
                    <p className="p-3 mt-3" style={{fontSize:13}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
            </div>
           </div>

           <div className="shadow-sm bg-white  rounded-2 mt-2 ms-md-5 mx-sm-5"  >
            <div className="row">
                <div className="col-2 text-center ">
                <img
                className=" pe-3"
                src={process.env.PUBLIC_URL + "/Group 9242.png"}
                style={{ height: "60px",marginTop:20 }}
                alt=""
              />
                </div>
                <div className="col-10">
                    <p className="p-3 mt-3" style={{fontSize:13}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
            </div>
           </div>

           <div className="shadow-sm bg-white  rounded-2 mt-2 ms-md-5 mx-sm-5" >
            <div className="row">
                <div className="col-2 text-center ">
                <img
                className=" pe-3"
                src={process.env.PUBLIC_URL + "/Group 9243.png"}
                style={{ height: "60px",marginTop:20 }}
                alt=""
              />
                </div>
                <div className="col-10">
                    <p className="p-3 mt-3" style={{fontSize:13}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
            </div>
           </div>
        
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
