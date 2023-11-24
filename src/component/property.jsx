function Property() {
  return (
    <>
   <div id="property" className=" container-fluid">
    <div className="row">

        <div className="col-sm-12 col-md-4 text-center">
          <div className="shadow-sm  bg-light rounded-2">
          <img className="mt-5" src={process.env.PUBLIC_URL + "/Booking 11.png"} style={{height:"70px"}}/>
          <h3 className="mt-3">رزرو سریع</h3>
          <p className="p-4 px-5 pb-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 text-center">
          <div className="shadow-sm  bg-light rounded-2">
          <img className="mt-5" src={process.env.PUBLIC_URL + "/destination 1.png"} style={{height:"70px"}}/>
          <h3 className="mt-3">بهترین تور های سراسر دنیا</h3>
          <p className="p-4 px-5 pb-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </div>
        </div>

        <div className="col-sm-12 col-md-4  text-center">
          <div className="shadow-sm  bg-light rounded-2">
          <img className="mt-5" src={process.env.PUBLIC_URL + "/airplane.png"} style={{height:"70px"}}/>
          <h3 className="mt-3">سفر به دور دنیا</h3>
          <p className="p-4 px-5 pb-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </div>
        </div>
   
        
    </div>
   </div>
    </>
  );
}

export default Property;
