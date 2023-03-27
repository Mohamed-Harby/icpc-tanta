import WeekContent from "@/components/WeekContent";

const week = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <WeekContent
        name={data.name}
        title={data.title}
        resources={data.resources}
        problems={data.problems}
      />
    </div>
  );
};

export default week;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://raw.githubusercontent.com/Mohamed-Harby/icpc-tanta/main/src/data/weeks.json`
  );
  const data = await res.json();
  const week = data.find((week) => week.id === context.params.weekId);
  return {
    props: { data: week },
  };
}
