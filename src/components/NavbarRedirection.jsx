import style from "@/styles/NavbarRedirection.module.css";
import Image from "next/image";

export const NavbarRedirection = ({ link, logo, text }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={style.redirectionLink}
      onClick={handleClick}
    >
      <Image
        src={logo}
        alt="codeforces"
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
      />
      <p>{text}</p>
    </div>
  );
};
