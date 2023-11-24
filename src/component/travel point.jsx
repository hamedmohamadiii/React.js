function Travelpoint() {
  return (
    <>
      <section id="travelpoint">
        <div className=" container-fluid">
          <div className="row" >
            <div className="col-lg-6 col-sm-12">
              <div className="row text-center" id="travelpoint" style={{ marginTop: 40 }}>
                <h2 className="p-5">ما بهتون کمک میکنیم تا مکان رویایی تون رو برای سفر پیدا کنید</h2>
                <p className="px-5" style={{ paddingLeft: 50, paddingRight: 50 }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.{" "}
                </p>
              </div>
              <div className="row mt-5 ">
                <div className="col-6">
                  <div className=" shadow-sm rounded-2 text-center bg-white mx-3">
                    <h2 className="p-3"style={{color:'#ff5722'}}>100</h2>
                    <p className="pb-3 px-3">هتل لاکچری</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" shadow-sm rounded-2 text-center bg-white mx-3">
                    <h2 className="p-3"style={{color:'#ff5722'}}>500+</h2>
                    <p className="pb-3 px-3">بسته تعطیلات</p>
                  </div>
                </div>
              </div>

              <div className="row mt-5 ">
                <div className="col-6">
                  <div className=" shadow-sm rounded-2 text-center bg-white mx-3">
                    <h2 className="p-3"style={{color:'#ff5722'}}>+2k</h2>
                    <p className="pb-3 px-3">مشتری خوشحال</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" shadow-sm rounded-2 text-center bg-white mx-3">
                    <h2 className="p-3"style={{color:'#ff5722'}}>7</h2>
                    <p className="pb-3 px-3">خطوط هوایی ممتاز</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-6 d-none d-lg-inline">
              <img
                className="mt-5 "
                src={process.env.PUBLIC_URL + "/Group 9238.png"}
                style={{ height: "600px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Travelpoint;
