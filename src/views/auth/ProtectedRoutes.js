import {useState, useEffect, React}  from "react";
import { Navigate, Outlet , useLocation} from "react-router-dom";
import Api from '../../utils/Api'

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  const [isTokenValidated, setIsTokenValidated] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      Api.post('/protected', {
        token
      }).then((res) => {
        if (res.data.status === 'valid') {
          setAuth(true);
        }
      })
      .catch((err) => {
        console.log(err)
        setAuth(false);
        localStorage.removeItem("auth_token");
      })
      .then(() => setIsTokenValidated(true));
    }else {
      setIsTokenValidated(true); // in case there is no token
   }
  }, [pathname])
  if (!isTokenValidated) return <div>Loading</div>; // TODO add a spinner component here
  return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;