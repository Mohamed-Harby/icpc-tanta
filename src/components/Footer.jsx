import Image from "next/image";
import React from "react";
import Captions from "@svgs/captions.svg";

const Footer = () => {
  return (
    <div
      style={{
        // minHeight: "40px",
        // backgroundColor: "#24303D",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "8rem",

        // paddingLeft: "1rem",
        // paddingRight: "1rem",
        // marginTop: "3rem",
        // color: "#fff",
      }}
    >
      <Image
        src={Captions}
        alt="Captions"
        width={200}
        height={40}
        style={{ margin: "0.5rem" }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          minHeight: "40px",
          backgroundColor: "#24303D",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          padding: "auto",
          marginTop: "2rem",
          color: "#fff",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <p style={{ textAlign: "center" }}>
          “It does not matter how slowly you go as long as you do not stop.”
        </p>
      </div>
    </div>
  );
};

export default Footer;
