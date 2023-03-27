import styles from "@/styles/WeekContent.module.css";
import ItemCard from "./ItemCard";
import WeekCard from "./WeekCard";

const WeekContent = ({ name, title, resources, problems }) => {
  return (
    <div className={styles.weekWrapper}>
      <h2 style={{ color: "#fff", fontWeight: "450" }}>
        {name} :{" "}
        <span style={{ color: "#A3ADB9", fontWeight: "350" }}> {title}</span>
      </h2>

      <div>
        <h2 style={{ color: "#fff", fontWeight: "450", marginTop: "4rem" }}>
          Resources
        </h2>
        {resources.map((resource, idx) => (
          <div key={resource.id}>
            <ItemCard number={idx} name={resource.name} link={resource.link} />
          </div>
        ))}
      </div>
      <div>
        <h2 style={{ color: "#fff", fontWeight: "450", marginTop: "4rem" }}>
          Problems
        </h2>
        {problems.map((problem, idx) => (
          <div key={problem.id}>
            <ItemCard number={idx} name={problem.name} link={problem.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekContent;
