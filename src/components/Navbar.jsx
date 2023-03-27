import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import codeforcesLogo from "@svgs/codeforces.svg";
import facebookLogo from "@svgs/facebook.svg";
import telegramLogo from "@svgs/telegram.svg";
import vjudgeLogo from "@svgs/vjudge.svg";
import { NavbarRedirection } from "./NavbarRedirection";
import Logo from "@svgs/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  return (
    <nav className={styles.navbar}>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div
        className={`${isCollapsed ? "collapse" : ""} navbarCollapse`}
        id="navbarNav"
        style={{ flex: 1 }}
      >
        <ul className={styles.navbarNav}>
          <li>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href="/">
                {/* <div className={styles.contentTab}>Home</div> */}
                <Image
                  src={Logo}
                  alt="Logo"
                  width={45}
                  height={45}
                  style={{
                    cursor: "pointer",
                    marginRight: "1rem",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                />
              </Link>
              <Link href="/weeks">
                <div className={styles.contentTab}>Content</div>
              </Link>
            </div>
          </li>
          {/* <li className={styles.navItem}> */}
          <div className={styles.socailSection}>
            <NavbarRedirection
              link="https://vjudge.com/"
              logo={vjudgeLogo}
              text="Vjudge Group"
            />
            <NavbarRedirection
              link="https://codeforces.com/group/2OzcuPykTm/contests"
              logo={codeforcesLogo}
              text="Codeforces Group"
            />
            <NavbarRedirection
              link="https://t.me/icpc_tc"
              logo={telegramLogo}
              text="Telegram Channel"
            />
            <NavbarRedirection
              link="https://www.facebook.com/acm.tanta.community"
              logo={facebookLogo}
              text="Facebook Page"
            />
          </div>
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
