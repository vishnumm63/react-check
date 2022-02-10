import { Link } from "react-router-dom";
import "./Register2.css";

export default function Register() {
  return (
    <>
      <div className="mainpage">
        {/* <div className="container"> */}
          <div className="container container2">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cdg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <Link to="Loginpage" className="fw-bold text-body">
                    <u>Login here</u>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
