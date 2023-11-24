import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = () => {
  const selector = useSelector((state) => state.user);
  return (
    <>
      {/* navbar */}
      <section id="home">
        <div className="navbar navbar-background navbar-expand-md rounded-pill mx-3  mt-2  bg-opacity-75 ">
          <div className="container-fluid ">
            {/* toggler */}
            <button
              class="navbar-toggler "
              style={{ backgroundColor: "#ffffff" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" style={{ backgroundColor: "#ffffff" }}></span>
            </button>
            {/* end of toggler */}

            {/* brand */}
            <div className="me-auto ">
              <a class="" href="#">
                <img src={process.env.PUBLIC_URL + "/logo.png"} style={{ height: 40 }} alt="" />
              </a>
            </div>
            {/* end of brand */}

            {/* item */}
            <div class="offcanvas offcanvas-end  " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header  border-bottom  shadow-sm  ">
                <button
                  type="button"
                  style={{ backgroundColor: "#ffffff" }}
                  class="btn-close me-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
                {/* <h5 style={{ marginRight: 125 }} class="offcanvas-title  " id="offcanvasNavbarLabel">
          <img src={process.env.PUBLIC_URL + "/images/OBJECTS.png"} style={{ height: 45 }} alt="" />
        </h5> */}
              </div>

              <div class="offcanvas-body align-self-md-center  ">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item     mb-2 ">
                    <Link class="nav-link active item mx-2  pt-3" aria-current="page" to={"/"}>
                      خانه
                    </Link>
                  </li>
                  <li class="nav-item dropdown   mb-2">
                    <a class="nav-link item mx-2 pt-3" href="#property" role="button"  aria-current="page">
                    مزیت ها
                    </a>
                  </li>
                  <li class="nav-item  mb-2">
                    <a class="nav-link  item mx-2 pt-3" aria-current="page" href="#travelpoint">
                       امکانات
                    </a>
                  </li>
                  <li class="nav-item   mb-2">
                    <a class="nav-link  item mx-2 pt-3" aria-current="page" href="#service">
                      خدمات
                    </a>
                  </li>
                </ul>
                <hr className="dropdown" />
                {/* dropdown */}
                <div class="btn-group d-md-none dropstart">
                  <a role="button" className=" " data-bs-toggle="dropdown" aria-expanded="false" href="#">
                    <i class="bi bi-brightness-high  p-2 item-icon " style={{ fontSize: 26 }}></i>
                  </a>

                  <ul class="dropdown-menu text-center rounded-3" style={{ backgroundColor: "#cfcdca" }}>
                    <li>
                      <a role="button" class="dropdown-item rounded-3" href="#">
                        روشن
                      </a>
                    </li>
                    <hr className="dropdown" />
                    <li>
                      <a role="button" class="dropdown-item rounded-3" href="#">
                        تاریک
                      </a>
                    </li>
                  </ul>
                </div>
                {/* end of dropdown */}
                {/* icon-link */}

                <button type="button" class="btn  mx-2 rounded-5 p-2 d-md-none   d-inline" style={{ backgroundColor: "5D50C6" }}>
                  <Link to="/Singup">sign uppp</Link>
                </button>
                <button className="rounded-5 p-2 px-3 border-0 d-md-none   d-inline" style={{ backgroundColor: "#5D50C6", color: "#ffffff" }}>
                  <Link to="/Login">Log in </Link>
                </button>

                {/* end of icon-link */}
              </div>
            </div>
            {/* end of item */}

            {/* signup & login */}
         {selector.firstName&&selector.lastName?<div><i className="  bi-person-circle ms-1 mt-5 " style={{marginTop:200,fontSize:28}}></i>{selector.firstName+" "+selector.lastName}</div>:<div className="d-flex">
            

                <button  type="button" class="btn  mx-2 rounded-5 p-2 d-none   d-md-block" style={{ backgroundColor: "5D50C6" }}>
                  <Link className=" text-dark" to="/Singup">
                    sign up
                  </Link>
                </button>
                <button className="rounded-5 p-2 px-3 border-0 d-none d-md-block" style={{ backgroundColor: "#5D50C6", color: "#ffffff" }}>
                  <Link className=" text-white" to="/Login">
                    Log in{" "}
                  </Link>
                </button>
                </div>}
            {/* end of  signup & login*/}
          </div>
        </div>
      </section>
      {/* end of navbar */}
    </>
  );
};

export default Navbar;
