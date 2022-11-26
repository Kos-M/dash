import React from "react";
// import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

const img =   require("../assets/img/pikwizard-snow-winter-landscape.jpg").default

export default function NotFound() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{backgroundImage: `url(${img})`
        }}
            
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap text-center ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                {/* <div className="pr-12"> */}
                  {/* <br></br> */}
                  
                  <h1 className="text-white  font-semibold text-5xl">4 0 4  Not found</h1>
                  <p className="mt-4 text-lg text-blueGray-200">We searched eveywhere..</p>
                  <br></br>
                  <h1 className="text-white font-semibold text-3xl">
                    Oops something odd just happened..
                  </h1>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

      
 
      </main>
      <Footer />
    </>
  );
}
