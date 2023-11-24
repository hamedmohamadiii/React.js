function Banner() {
    return ( <>
    {/* banner */}
    <section>
        <div className=" container-fluid">
            <div className="row">

            <div className="col-sm-12 col-md-6 text-center ">
                <div className=" mt-lg-5 pt-lg-5 mt-2 mb-4 mb-lg-0" >
                 
                <h1 className="my-4" style={{color:"#3d012e"}}>سفر را با ما تجربه کنید</h1>
               <p className="" style={{color:'#939aa6'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
               <button className="rounded-5 p-2 border-0 px-3" style={{backgroundColor:"#5D50C6",color:'#ffffff'}}>شروع کنید</button>
                </div>
             
            </div>

            <div className="d-none d-md-flex col-sm-12 col-md-6 ">
                <div className="  me-xl-5" style={{marginTop:0}}>
                <img src={process.env.PUBLIC_URL + "/banner.png"} style={{height:"600px"}}/>
                </div>
            </div>

            </div>
        </div>
    </section>
    {/* end of banner */}
    </> );
}

export default Banner;