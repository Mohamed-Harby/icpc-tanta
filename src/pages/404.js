import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
        gap: "2rem",
        paddingBottom: "17rem",
      }}
    >
      <h1>Error 404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
