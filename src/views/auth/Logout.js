import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function Logout(props) {
  Cookies.remove("auth_token", { path: "/" });
}
