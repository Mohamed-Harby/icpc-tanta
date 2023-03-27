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
    "https://raw.githubusercontent.com/Mohamed-Harby/icpc-tanta/main/src/data/weeks.json"
  );
  const data = await res.json();
  return {
    props: { weeks: data },
  };
}
