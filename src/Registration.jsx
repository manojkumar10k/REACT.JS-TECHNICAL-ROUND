import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";  

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3011/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const Change = (e) => {
    e.preventDefault();

    const findEmail = users.find((u) => u.email === email);

    if (!findEmail) {
      const jsdata = { name, email, password };
      setIsSubmitting(true);

      setTimeout(() => {
        axios
          .post("http://localhost:3011/user", jsdata)
          .then((res) => {
            setIsSubmitting(false);
            if (res.status === 201) {
              toast.success("Records inserted..!");
              nav("/login");
            }
          })
          .catch((error) => {
            setIsSubmitting(false);
            console.error("Error inserting data:", error);
            toast.error("Error during registration");
          });
      }, 5000);
    } else {
      toast.error("Email Already Registered");
    }
  };

  return (
    <div>
      <section className="m-3">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center">Create an account</h2>
                    <form onSubmit={Change}>
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          required
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={(e) => setName(e.target.value)}
                          disabled={isSubmitting}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="email"
                          required
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isSubmitting}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="password"
                          required
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          disabled={isSubmitting}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          required
                          type="checkbox"
                          id="form2Example3cg"
                          disabled={isSubmitting}
                        />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in{" "}
                          <a className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg text-bg-light"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                      </div>
                      <p className="text-center text-muted mt-2 mb-0 d-flex justify-content-center text-decoration-none">
                        Have already an account?{" "}
                        <Link
                          to={"/login"}
                          className="fw-bold text-body text-decoration-none"
                        >
                          <u className="text-decoration-none">Login here</u>
                        </Link>
                      </p>
                    </form>

                    {isSubmitting && (
                      <div
                        style={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          zIndex: 1000,
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              border: "4px solid rgba(255, 255, 255, 0.3)",
                              backgroundImage: "url('./images/logo.jpg')",
                              width: "100px",
                              height: "100px",
                              backgroundSize: "cover",
                              borderTop: "4px solid #fff",
                              borderRadius: "50%",
                              animation: "spin 2s linear infinite",
                              margin: "auto",
                            }}
                          ></div>
                          <p style={{ marginTop: "15px" }}>
                            Please wait...
                          </p>
                        </div>
                      </div>
                    )}

                    <style>
                      {`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `}
                    </style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
