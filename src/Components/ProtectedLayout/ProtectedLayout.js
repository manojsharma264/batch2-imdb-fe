import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
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
            From Your Watchlist {">"}
          </h2>
          <div className="unauth">
            <AddBoxIcon style={{ color: "#fff" }} />
            <p>Sign in to access your Watchlist</p>
            <p>
              Save shows and movies to keep track of what you want to watch.
            </p>
            <button className="signin">Sign in to IMDB</button>
          </div>
        </>
      )}
    </div>
  );
}
