import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
import Api from "../../utils/Api";
const cookies = new Cookies();

export default function Login(props) {
  const [IsLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let token = cookies.get("auth_token");
    if (token) {
      window.location.href = "/admin/dashboard";
    }
  }, []);
  function login(e) {
    e.preventDefault();
    setIsLoading(true);
    Api.post("/users/login", {
      username: e.target.username.value,
      password: e.target.password.value,
      // "remeber_password": e.target.remeber_password.checked
    })
      .then((result) => {
        if (result.data.status === 200 && result.data.msg === "Login Succeed") {
          console.log(result);
          cookies.set("auth_token", result.data.token, {
            path: "/",
            sameSite: true,
          });
          setIsLoading(false);
          cookies.set("auth_token", "dummy", {
            path: "/",
            sameSite: true,
          });

          navigate(-2, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
                <form onSubmit={login}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      autoComplete="username"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        name="remeber_password"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div> */}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {IsLoading ? (
                        <>
                          {" "}
                          Sign In <i className="fas fa-spinner fa-spin">
                            {" "}
                          </i>{" "}
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
