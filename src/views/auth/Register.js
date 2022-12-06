import React, { useEffect, useState } from "react";
import SmallModal from "../../components/Modals/SmallModal";
import { Link } from "react-router-dom";
import Api from "../../utils/Api";

export default function Register() {
  const [IsLoading, setIsLoading] = useState(false);
  const [AccountExist, setAccountExist] = useState(false);

  function closeModal() {
    setAccountExist(false);
  }

  function register(e) {
    e.preventDefault();
    if (
      e.target.email.value === "" ||
      e.target.password.value === "" ||
      e.target.username.value === ""
    ) {
      return;
    }
    setIsLoading(true);
    Api.post("/users/register", {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    })
      .then((result) => {
        console.log(result.data);
        if (Object.keys(result.data).includes("ERROR")) {
          if (result.data.ERROR === "Email is already in use!") {
            setAccountExist(true);
          }
          return;
        }
        setIsLoading(false);
        window.location = "/auth/login";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-2 ">
                <form onSubmit={register}>
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
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Pick a good usermame"
                      autoComplete="username"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter your email"
                      autoComplete="email"
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
                      placeholder="Try a good password"
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-80 ease-linear transition-all duration-250"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-2/3 absolute top-0 right-0 text-right  ">
                <Link to="/auth/login" className="text-blueGray-200 mg-6">
                  <small>Login</small>
                </Link>
              </div>
            </div>
          </div>

          {AccountExist ? (
            <SmallModal
              visible={AccountExist}
              onClose={closeModal}
              title="Email is already in use"
              content="Double check your email address, seems there is an account linked to that email."
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
