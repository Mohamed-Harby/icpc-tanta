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
    `https://gist.githubusercontent.com/Mohamed-Harby/894234d4f421b85da47931cd81762b80/raw/69f926c287e31ebe14c16ffe8718673ef4277de6/weeks.json`
  );
  const data = await res.json();
  const week = data.find((week) => week.id === context.params.weekId);
  return {
    props: { data: week },
  };
}
