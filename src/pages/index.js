import styles from "@/styles/Home.module.css";

export default function Home() {
  const handleJoinClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform",
      "_blank"
    );
  };

  return (
    <div className={styles.introSection}>
      <h1 className={styles.title}>Welcome to ICPC Tanta Community!</h1>
      <p className={styles.description}>
        Join our community to learn new skills, exchange tips and tricks,
        participate in practice sessions, get feedback and guidance from
        experienced mentors and coaches, and stay updated on the latest news and
        events related to the ICPC.
      </p>
      <div className={styles.joinSection}>
        <p className={styles.joinText}>Our training is open</p>
        <button className={styles.joinButton} onClick={handleJoinClick}>
          Join Now
        </button>
      </div>
    </div>
  );
}
