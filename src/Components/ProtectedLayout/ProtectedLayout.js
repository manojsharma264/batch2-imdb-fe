import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function ProtectedLayout() {
  const [isLoggedin, setLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      setLoggedIn(false);
    }
  }, []);
  return (
    <div>
      {isLoggedin ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <h2 style={{ color: "white", marginLeft: "40px" }}>
            Sign in to access this
          </h2>
        </>
      )}
    </div>
  );
}
