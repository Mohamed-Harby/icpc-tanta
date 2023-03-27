import Image from "next/image";
import React from "react";
import styles from "@/styles/ItemCard.module.css";

const ItemCard = ({ number, name, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.cardTitle}>
        <div>
          <h3 style={{ color: "#fff", fontWeight: "450" }}>
            {number + 1} {".   "} {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
