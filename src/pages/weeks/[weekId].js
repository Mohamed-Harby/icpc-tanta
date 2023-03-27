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
    `http://localhost:3000/api/weeks/${context.params.weekId}`
  );
  const data = await res.json();
  return {
    props: { data: data },
  };
}
