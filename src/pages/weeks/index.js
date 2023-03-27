import Navbar from "@/components/Navbar";
import WeekCard from "@/components/WeekCard";
import styles from "@/styles/Content.module.css";
const content = ({ weeks }) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.title}>
        <h1 style={{ color: "#fff", marginBottom: "1rem", fontWeight: "400" }}>
          Newcomers Training
        </h1>
      </div>
      <div className={styles.weeksContainer}>
        {weeks.map((week) => (
          <div key={week.id}>
            <WeekCard
              id={week.id}
              name={week.name}
              title={week.title}
              resourcesCount={week.resources.length}
              problemsCount={week.problems.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default content;

export async function getServerSideProps() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Mohamed-Harby/894234d4f421b85da47931cd81762b80/raw/69f926c287e31ebe14c16ffe8718673ef4277de6/weeks.json"
  );
  const data = await res.json();
  return {
    props: { weeks: data },
  };
}
