import { useFormik } from "formik";
import * as yup from "yup" 
import { useDispatch } from "react-redux";
import { Link, NavLink, redirectDocument } from "react-router-dom";
import { loginFirstname,loginLastname } from "../redux/store";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password:"",
    },
    onSubmit: (values) => {
   dispatch(loginFirstname({firstName:values.firstName}));
   dispatch(loginLastname({lastName:values.lastName}));
   navigate("/")
    },

   validationSchema:yup.object({
    firstName: yup.string().max(20,"must be 20 characters or less").required("required"),
    lastName: yup.string().max(20,"must be 20 characters or less").required("required"),
    email: yup.string().required("required").email("invalid email "),
    password:yup.string(). required("required"),

   })
  });

  return (
    <>
      <section class="">
        {/* Jumbotron  */}
        <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  sign up now <br />
                  <span class="text-primary">Lorem ipsum dolor sit </span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta,
                  corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
                  aliquid ipsum atque?
                </p>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form onSubmit={formik.handleSubmit}>
                      {/* 2 column grid layout with text inputs for the first and last names  */}
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">

                            
                            <input
                         
                              type="text"
                              id="form3Example1"
                              class="form-control"
                              {...formik.getFieldProps("firstName")}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                              <div className="badge text-bg-danger">{formik.errors.firstName}</div>
                            ) : null}
                            <label class="form-label" for="form3Example1">
                              First name
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              {...formik.getFieldProps("lastName")}
                              class="form-control"
                            />

                            {formik.touched.lastName && formik.errors.lastName ? (
                              <div  className="badge text-bg-danger">{formik.errors.lastName}</div>
                            ) : null}
                            <label class="form-label" for="form3Example2">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Email input  */}
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? <div  className="badge text-bg-danger">{formik.errors.email}</div> : null}
                        <label class="form-label" for="email">
                          Email address
                        </label>
                      </div>

                      {/* Password input  */}
                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example4" class="form-control" 
                            {...formik.getFieldProps("password")}/>
                         {formik.touched.password && formik.errors.password ? <div  className="badge text-bg-danger">{formik.errors.password}</div> : null}

                        <label class="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      {/* Checkbox  */}
                      <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label" for="form2Example33">
                          Subscribe to our newsletter
                        </label>
                      </div>

                      {/* Submit button  */}
                      <button  type="submit" class="btn btn-primary btn-block mb-4">
                        Sign up
                      </button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron  */}
      </section>
    </>
  );
}

export default Signup;
