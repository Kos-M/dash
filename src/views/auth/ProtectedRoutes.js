import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const useAuth = () => {
  // const user=localStorage.getItem('user')
  const token = cookies.get("auth_token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const user = useAuth();
  if (!user) {
    // console.dir(children);
    // user is not authenticated
    return <Navigate to="/auth/login" />;
  }

  return children;
};

// const ProtectedRoutes = ({children}) => {
//   const auth = useAuth();

//   return auth ?  : <Navigate to="/auth/login" />;
// };

export default ProtectedRoute;

// // receives component and any other props represented by ...rest
// export default function ProtectedRoutes({ component: Component, ...rest }) {
//   return (
//     // this route takes other route assigned to it from the App.js and return the same route if condition is met
//     <Route
//       {...rest}
//       render={(props) => {
//         // get cookie from browser if logged in
//         const token = cookies.get("auth_token");
//         return <Component {...props} />;
//         // return route if there is a valid token set in the cookie
//         if (token) {
//           return <Component {...props} />;
//         } else {
//           // return the user to the landing page if there is no valid token set
//           return (
//             <Navigate
//               to={{
//                 pathname: "/auth",
//                 state: {
//                   // sets the location a user was about to assess before being redirected to login
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// }
