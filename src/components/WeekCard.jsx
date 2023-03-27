import Image from "next/image";
import React from "react";
// import resources logo
import styles from "@/styles/WeekCard.module.css";
import resourcesLogo from "@svgs/resources.svg";
import problemsLogo from "@svgs/problems.svg";
import Link from "next/link";

const WeekCard = ({ id, name, title, resourcesCount, problemsCount }) => {
  return (
    <Link href={`/weeks/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.cardTitle}>
          <div>
            <h3 style={{ color: "#fff", fontWeight: "450" }}>
              {name} :{" "}
              <span style={{ color: "#A3ADB9", fontWeight: "350" }}>
                {" "}
                {title}
              </span>
            </h3>
          </div>
          <div className={styles.cardStatics}>
            <div className={styles.staticsButton}>
              <Image
                src={resourcesLogo}
                alt="resources"
                width="18px"
                height="18px"
              />
              <p style={{ color: "#fff", fontSize: "0.9rem" }}>
                {resourcesCount} Resources
              </p>
            </div>
            <div className={styles.staticsButton}>
              <Image
                src={problemsLogo}
                alt="resources"
                width="18px"
                height="18px"
              />
              <p style={{ color: "#fff", fontSize: "0.9rem" }}>
                {problemsCount} Problems
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WeekCard;
