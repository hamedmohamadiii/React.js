function Footer() {
    return ( <>
    {/*  Remove the container if you want to extend the Footer to full width.  */}
<div class="container-fluid p-0">
  {/*  Footer  */}
  <footer class="text-center bg-light" >
    {/*  Grid container  */}
    <div class="container-fluid">
      {/*  Section: Links  */}
      <section class="mt-5">
        {/*  Grid row */}
        <div class="row text-center d-flex justify-content-center pt-5">
          {/*  Grid column  */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="">About us</a>
            </h6>
          </div>
          {/*  Grid column  */}

          {/*  Grid column  */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="">Products</a>
            </h6>
          </div>
          {/*  Grid column  */}

          {/*  Grid column  */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="">Awards</a>
            </h6>
          </div>
          {/*  Grid column  */}

          {/*  Grid column  */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="">Help</a>
            </h6>
          </div>
          {/*  Grid column  */}

          {/*  Grid column  */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="">Contact</a>
            </h6>
          </div>
          {/*  Grid column  */}
        </div>
        {/*  Grid row */}
      </section>
      {/*  Section: Links  */}

      <hr class="my-5" />

      {/*  Section: Text  */}
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
      </section>
      {/*  Section: Text  */}

      {/*  Section: Social  */}
      <section class="text-center mb-5">
        <a href="" class=" me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-github"></i>
        </a>
      </section>
      {/*  Section: Social  */}
    </div>
    {/*  Grid container  */}

    {/*  Copyright  */}
    <div
         class="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <a class="" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
    {/*  Copyright  */}
  </footer>
  {/*  Footer  */}
</div>
{/*  End of .container  */}
    </> );
}

export default Footer;